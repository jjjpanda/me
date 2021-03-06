const express = require('express')
const env = require('dotenv').config();

const request = require('request');

const app = express();

const cors = require('cors');

const path = require('path');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var whitelist = ['https://www.jthepanda.com', 'https://jjjpanda.github.io', 'https://jaeme.herokuapp.com']//, 'http://localhost:8181']
var corsOptions = {
  origin: function (origin, callback) {
    console.log(origin)
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  methods: "POST"
}

// HTML Calls
//app.use('/me/css', express.static(path.join(__dirname, '../src/css')));
//app.use('/me/img', express.static(path.join(__dirname, '../docs/img')));

app.options("*", cors(corsOptions))

const knownPaths = ['/'];
for (const webPath of knownPaths) {
  app.use(webPath, express.static('./docs', {
    index: 'index.html',
  }));
}

app.post("/contact", cors(corsOptions), (req, res) => {
  const {name, email, message, token} = req.body
  if(!name || !email || !token || (message && message.length > 1100)){
    res.status(400).json({ error: true, details: 'Input Error' });
  }
  else{
    request({
      method: 'POST',
      url: 'https://www.google.com/recaptcha/api/siteverify',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.recaptcha_secret_key}&response=${token}`
    }, (e, r, b) => {
      if(!e && JSON.parse(b).success){
        console.log("RECAPTCHA SUCCESS")
        request({
          method: 'POST',
          url: process.env.webhookURL,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content: `Message from ${name} (email: ${email}):\n${message ? message : ""}` }),
        },
        (error, response, body) => {
          if (!error) {
            res.json({ error: false, details: 'Details Sent to URL' });
          } else {
            res.status(400).json({ error: true, details: 'Details Not Sent to URL' });
          }
        });
      }
      else{
        console.log("RECAPTCHA FAIL")
        res.status(400).json({ error: true, details: 'ReCaptcha Failure' });
      }
    })
  }

})

/* const shortPaths = ['/'];
for (const webPath of shortPaths){
  app.use(webPath, (req, res) => {
    res.redirect(`/me${webPath}`)
  })
} */

module.exports = app;
