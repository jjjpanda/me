const ORIGINS = ['https://www.jthepanda.com', 'https://jjjpanda.github.io', 'http://localhost:8181']
const HOSTNAMES = ['www.jthepanda.com', 'jjjpanda.github.io', 'localhost']

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin')
    if (!ORIGINS.includes(origin)) return new Response('Forbidden', { status: 403 })

    const headers = {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Vary': 'Origin'
    }
    const reply = (details, status = 400) => Response.json({ error: status !== 200, details }, { status, headers })

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers })
    if (request.method !== 'POST') return reply('Method Not Allowed', 405)

    const ip = request.headers.get('CF-Connecting-IP')
    const { success } = await env.RATE_LIMITER.limit({ key: ip })
    if (!success) return reply('Too Many Requests', 429)

    const { name, email, message = '', token } = await request.json().catch(() => ({}))
    if (!name || !email || !token || [name, email, message].some(v => typeof v !== 'string')
      || name.length > 100 || email.length > 254 || message.length > 1100) {
      return reply('Input Error')
    }

    const captcha = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      body: new URLSearchParams({ secret: env.RECAPTCHA_SECRET_KEY, response: token, remoteip: ip })
    }).then(r => r.json())
    if (!captcha.success || !HOSTNAMES.includes(captcha.hostname)) return reply('ReCaptcha Failure')

    const hook = await fetch(env.WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `Message from ${name} (email: ${email}):\n${message}`,
        allowed_mentions: { parse: [] }
      })
    })
    if (!hook.ok) return reply('Details Not Sent to URL', 502)

    return reply('Details Sent to URL', 200)
  }
}
