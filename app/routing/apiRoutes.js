const fs = require('fs')
const path = require("path")
require('../data/friends.js')
const bodyParser = require("body-parser")

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    return res.json(friends)
  });
  
  app.post("/api/friends", function (req, res) {
    let newFriend = req.body
    console.log('userInput = ' + newFriend);
    friends.push(newFriend)
    
  });
}