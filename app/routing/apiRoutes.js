const fs = require('fs')
const path = require("path")
require('../data/friends.js')


module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    return res.json(friends)
  })

  app.post("/api/friends", function (req, res) {
    newFriend = req.body
    let answers = newFriend.scores
    let matchName = ''
    let matchImage = ''
    let totalDifference = 100

    for (let i in friends) {
      let diff = parseInt(0);
      for (let j in answers) {
        diff += Math.abs(parseInt(friends[i].scores) - parseInt(answers[j]))
      
        if (diff <= totalDifference) {
          totalDifference = diff
          matchName = friends[i].name
          matchImage = friends[i].photo
        }
      }
    }
    
    friends.push(newFriend)
    
    res.json({
      status: 'OK',
      matchName: matchName,
      matchImage: matchImage
    })
  })
}