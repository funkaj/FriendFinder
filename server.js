const fs = require('fs')
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8080;
require('./app/routing/htmlRoutes.js')(app);
require('./app/data/friends')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/api/friends", function(req, res){
  
  return res.json(friends)
});


app.post("/api/friends", function (req, res) {
let searchFriend = req.body;
friends.push(searchFriend);
console.log(friends)
res.sendFile(path.join(__dirname, "../data/friends.js"));
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});