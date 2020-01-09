const express = require("express");
const app = express();
const partials = require('express-partials');
const PORT = 8080; // default port 8080

app.set('view engine', 'ejs');
// Include partials middleware into the server
app.use(partials());

app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

app.get("/", (req, res) => {
  res.render("main");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/socialmedia", (req, res) => {
  res.render("social_media");
});

app.get("/github", (req, res) => {
  res.render("github");
});

app.get("/resume", (req, res) => {
  res.render("resume");
});

