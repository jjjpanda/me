# me
it's me

it's a website about me.

## Running locally

Run `npm ci`, then `npm start` to build and serve the production site. Use
`npm run startManual` for a development build before starting the server.

## GitHub Pages

Pushing to `master` builds and deploys the site through GitHub Actions. The
generated files in `docs/` are ignored by Git; `docs/img/` remains tracked
because the build and site use those assets. The custom domain is configured
in the repository's Pages settings. `docs/CNAME` remains tracked for reference
but is ignored when Pages publishes from Actions.
