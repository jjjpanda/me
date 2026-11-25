require('dotenv').config();

const express = require('express')
const app = express();

const cors = require('cors');

const fs = require('fs')
const path = require('path');

const inDevelopmentEnv = process.env.NODE_ENVIRONMENT === "development" 
if(inDevelopmentEnv) { console.log("working in develop env") }

if(inDevelopmentEnv){
  app.use('/me/css', express.static(path.join(__dirname, '../src/css')));
  app.use('/me/img', express.static(path.join(__dirname, '../docs/img')));
}

const knownPaths = ['/'];
for (const webPath of knownPaths) {
  app.use(webPath, express.static('./docs', {
    index: 'index.html',
  }));
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

app.get("/icons", cors(), (req, res) => {
  const suffix = "Icon.png"
  let listOfIcons = fs.readdirSync(
    path.resolve(__dirname, '../docs/img/icons')
  )
    .filter(str => str.includes(suffix))
    .map(str => str.replace(suffix, ""))
  shuffleArray(listOfIcons)
  res.send(listOfIcons)
})

module.exports = app;
