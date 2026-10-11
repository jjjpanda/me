import { useState, useEffect } from 'react';

const GITHUB_USERNAME = 'jjjpanda';
const REPO_COUNT = 10;
const CACHE_KEY = 'github_repos_jjjpanda_v5';
const EXCLUDED_REPOS = [
    'me',
    'fart',
    'forkyou',
    'steelserieskeyboardoledtickertape',
    'twenty'
];

export const FALLBACK_REPOS = [
    {
        id: 'fallback-outsmartoptions',
        name: 'OutsmartOptions',
        description: 'A tool to help formulate and analyze options trading strategies.',
        html_url: 'https://github.com/jjjpanda/OutsmartOptions',
        homepage: 'https://jjjpanda.github.io/OutsmartOptions',
        stargazers_count: 5,
        language: 'JavaScript',
        topics: ['options', 'trading', 'finance', 'calculator'],
        pushed_at: '2026-02-22T00:29:54Z',
        size: 14121
    },
    {
        id: 'fallback-chimera',
        name: 'Chimera',
        description: 'A motion security camera web app for IP cameras.',
        html_url: 'https://github.com/jjjpanda/Chimera',
        homepage: null,
        stargazers_count: 3,
        language: 'JavaScript',
        topics: ['security', 'camera', 'microservices', 'surveillance'],
        pushed_at: '2026-09-20T15:13:41Z',
        size: 6621
    },
    {
        id: 'fallback-embedding-viewer',
        name: 'embedding-viewer',
        description: 'A local semantic search and related notes plugin for Obsidian.',
        html_url: 'https://github.com/jjjpanda/embedding-viewer',
        homepage: null,
        stargazers_count: 0,
        language: 'TypeScript',
        topics: ['obsidian', 'plugin', 'embeddings', 'semantic-search'],
        pushed_at: '2026-09-09T02:38:08Z',
        size: 165
    },
    {
        id: 'fallback-rp-interval-quiz',
        name: 'RP-Interval-Quiz',
        description: 'A musical interval quiz testing the ability to distinguish intervals played at random.',
        html_url: 'https://github.com/jjjpanda/RP-Interval-Quiz',
        homepage: 'https://jjjpanda.github.io/RP-Interval-Quiz/',
        stargazers_count: 1,
        language: 'JavaScript',
        topics: ['music', 'quiz', 'audio'],
        pushed_at: '2023-01-06T02:52:39Z',
        size: 2567
    }
];

function scoreRepo(repo) {
    const daysSincePush = (Date.now() - new Date(repo.pushed_at)) / (1000 * 60 * 60 * 24);
    
    // Recency: smooth decay with ~500-day scale (keeps active/recent projects near the top)
    const recency = 0.55 * Math.exp(-daysSincePush / 500);
    
    // Live demo bonus: real deployed products deserve prominent placement
    const demoBonus = repo.homepage ? 0.25 : 0;
    
    // Stars bonus: community approval signal
    const starsBonus = Math.min(0.25, (repo.stargazers_count || 0) * 0.1);
    
    // Quality description bonus: rewards descriptive explanations over quips
    const descBonus = Math.min(0.1, (repo.description?.length || 0) / 200);
    
    // Size: logarithmic proxy with strict cap (max 0.1) so large repos don't overpower
    const sizeBonus = Math.min(0.1, Math.log10(1 + (repo.size || 0)) / 30);
    
    return recency + demoBonus + starsBonus + descBonus + sizeBonus;
}

export default function useGitHubRepos() {
    const [repos, setRepos] = useState(() => {
        try {
            const cached = sessionStorage.getItem(CACHE_KEY);
            if (cached) {
                const parsed = JSON.parse(cached);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    return parsed;
                }
            }
        } catch (e) {
            // ignore
        }
        return [];
    });
    const [loading, setLoading] = useState(() => {
        try {
            const cached = sessionStorage.getItem(CACHE_KEY);
            return !cached;
        } catch (e) {
            return true;
        }
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            const cached = sessionStorage.getItem(CACHE_KEY);
            if (cached) {
                const parsed = JSON.parse(cached);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    setRepos(parsed);
                    setLoading(false);
                    return;
                }
            }
        } catch (e) {
            // ignore
        }

        fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`GitHub API request failed: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                if (!Array.isArray(data)) {
                    throw new Error('Unexpected GitHub API response structure');
                }
                const fallbackMap = Object.fromEntries(
                    FALLBACK_REPOS.map(repo => [repo.name.toLowerCase(), repo])
                );
                const scored = data
                    .map(r => {
                        const fallback = fallbackMap[r.name.toLowerCase()];
                        return {
                            ...r,
                            description: r.description || fallback?.description || null,
                            homepage: r.homepage || fallback?.homepage || null,
                            topics: (r.topics && r.topics.length > 0) ? r.topics : (fallback?.topics || [])
                        };
                    })
                    .filter(r => 
                        !r.fork && 
                        r.description && 
                        r.description.trim().length >= 15 &&
                        !EXCLUDED_REPOS.includes(r.name.toLowerCase())
                    )
                    .map(r => ({ ...r, score: scoreRepo(r) }))
                    .sort((a, b) => b.score - a.score)
                    .slice(0, REPO_COUNT);

                const finalRepos = scored.length > 0 ? scored : FALLBACK_REPOS;
                setRepos(finalRepos);
                setLoading(false);
                try {
                    sessionStorage.setItem(CACHE_KEY, JSON.stringify(finalRepos));
                } catch (e) {
                    // ignore
                }
            })
            .catch(err => {
                console.warn('Failed to load GitHub repos, falling back to static projects:', err);
                setError(err);
                setRepos(FALLBACK_REPOS);
                setLoading(false);
            });
    }, []);

    return { repos, loading, error };
}
