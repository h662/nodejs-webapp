const express = require("express");
const app = express();

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/topic/new", (req, res) => {
  res.render("new");
});

app.post("/topic", (req, res) => {
  res.send("Hi, Post");
});

app.listen(3000, () => {
  console.log("Connected, 3000 port");
});
