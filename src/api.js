const express = require("express");
const serverless = require("serverless-http");
const partials = require('express-partials');

const app = express();

const router = express.Router();

app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/dist');
// Include partials middleware into the server
app.use(partials());

router.get("/", (req, res) => {
  res.render("index")
});

router.get("/about", (req, res) => {
  res.render("about")
})

router.get("/socialmedia", (req, res) => {
  res.render("socialmedia");
});

router.get("/github", (req, res) => {
  res.render("github");
});

router.get("/resume", (req, res) => {
  res.render("resume");
});


app.use("/.netlify/functions/api",  router);

module.exports.handler = serverless(app);