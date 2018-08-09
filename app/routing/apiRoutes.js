const path = require("path")
friends = require('../data/friends.js')

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    return res.json(friends)
  });

  app.post("/api/friends", function (req, res) {
    let searchFriend = req.body
    friends.push(searchFriend)
    console.log(friends)
    res.sendFile(path.join(__dirname, "../data/friends.js"))
  });
}