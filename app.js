const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send("This is my root");
});

app.listen(8080, () => {
  console.log("App is listening on Port 8080");
})