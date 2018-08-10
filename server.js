const fs = require('fs')
const path = require("path")
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const PORT = process.env.PORT || 8080

//public directory
app.use(express.static(path.join(__dirname, './app/public')));
//routes
require('./app/routing/htmlRoutes.js')(app)
require('./app/routing/apiRoutes.js')(app)
//parsing data
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
//listener
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT)
})