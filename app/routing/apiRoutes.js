const path = require("path")
require('../data/friends.js')

module.exports = function (app) {
  // GET for friends array
  app.get("/api/friends", function (req, res) {
    return res.json(friends)
  })
// post to send user info and process to find new friend match
  app.post("/api/friends", function (req, res) {
    // set varibles
    newFriend = req.body
    let answers = newFriend.scores
    let friendName = ''
    let friendImage = ''
    let totalDifference = 100
    // loop through friend array to find best match
    for (let i in friends) {
      let diff = parseInt(0);
      // loop through scores and subtract absolute to find friends with the least difference
      for (let j in answers) {
        diff += Math.abs(parseInt(friends[i].scores) - parseInt(answers[j]))
      // find friend with total closest to 0 and assign to variables
        if (diff <= totalDifference) {
          totalDifference = diff
          friendName = friends[i].name
          friendImage = friends[i].photo
        }
      }
    }
    // push user input into friends array
    friends.push(newFriend)
    // send response back to survey for printing to DOM
    res.json({
      status: 'OK',
      friendName: friendName,
      friendImage: friendImage
    })
  })
}