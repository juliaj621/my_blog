const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

app.get("/", (req, res) => {
  res.send("Main Page!");
});

app.get("/about", (req, res) => {
  res.send("About me!");
});

app.get("/socialmedia", (req, res) => {
  res.send("social media!");
});

app.get("/github", (req, res) => {
  res.send("github!");
});

app.get("/resume", (req, res) => {
  res.send("Resume!");
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});