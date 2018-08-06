const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = 8080;
const htmlRoutes = require('./app/routing/htmlRoutes')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
});
app.get("/survey", function (req, res) {
  res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

// app.get("/api/survey", function (req, res) {
//   return res.json(characters);
// });

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});