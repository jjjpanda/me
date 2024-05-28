require('dotenv').config();

const express = require('express')
const axios = require('axios');
const app = express();

const cors = require('cors');

const fs = require('fs')
const path = require('path');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const inDevelopmentEnv = process.env.NODE_ENVIRONMENT === "development" 
if(inDevelopmentEnv) { console.log("working in develop env") }

var whitelist = inDevelopmentEnv ? ['http://localhost:8181'] : ['https://www.jthepanda.com', 'https://jjjpanda.github.io']
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

if(inDevelopmentEnv){
  app.use('/me/css', express.static(path.join(__dirname, '../src/css')));
  app.use('/me/img', express.static(path.join(__dirname, '../docs/img')));
}

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

    let data = new URLSearchParams();
    data.append('secret', process.env.recaptcha_secret_key);
    data.append('response', token);

    axios({
      method: 'POST',
      url: 'https://www.google.com/recaptcha/api/siteverify',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: data.toString()
    })
    .then((response) => {
      if(response.data.success){
        console.log("RECAPTCHA SUCCESS")
        axios({
          method: 'POST',
          url: process.env.webhookURL,
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify({ content: `Message from ${name} (email: ${email}):\n${message ? message : ""}` }),
        })
        .then((response) => {
          res.json({ error: false, details: 'Details Sent to URL' });
        })
        .catch((error) => {
          res.status(400).json({ error: true, details: 'Details Not Sent to URL' });
        });
      }
      else{
        console.log("RECAPTCHA FAIL")
        res.status(400).json({ error: true, details: 'ReCaptcha Failure' });
      }
    })
    .catch((error) => {
      console.log("Error in ReCaptcha verification");
    });

  }

})

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
