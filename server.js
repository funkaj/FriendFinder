const fs = require('fs')
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8080;
require('./app/routing/htmlRoutes.js')(app);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});