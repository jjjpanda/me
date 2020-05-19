const express = require('express');

const app = express();

const path = require('path');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// HTML Calls
app.use('/me/css', express.static(path.join(__dirname, '../src/css')));
app.use('/me/img', express.static(path.join(__dirname, '../docs/img')));

const knownPaths = ['/me/'];
for (const webPath of knownPaths) {
  app.use(webPath, express.static('./docs', {
    index: 'index.html',
  }));
}

const shortPaths = ['/'];
for (const webPath of shortPaths){
  app.use(webPath, (req, res) => {
    res.redirect(`/me${webPath}`)
  })
}

module.exports = app;
