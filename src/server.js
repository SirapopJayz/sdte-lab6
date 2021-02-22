const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("Hello my world!");
});

module.exports = app;
