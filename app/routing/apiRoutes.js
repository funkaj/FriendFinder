const path = require("path");
require('../data/friends.js')(app)
module.exports = function(app){
  app.get("/api/friends", function(req, res){
  
      return res.json(friends)
  });


  app.post("/api/friends", function (req, res) {
    let searchFriend = req.body;
    friends.push(searchFriend);
    console.log(friends)
    res.sendFile(path.join(__dirname, "../data/friends.js"));
  });
  $.get("/api/friends/", function (data) {
    data.forEach(function (friends, index) {
      if (index < 5) {
        $("#friends").append($(`<h2>
            <span class="label label-primary">${index + 1}</span>
            <span id="name">${friends.name}</span>
          </h2>`))
      } 
    })
  });
}
