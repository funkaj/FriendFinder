const fs = require('fs')
const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const PORT = process.env.PORT || 8080

//parsing data
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//routes
require('./app/routing/apiRoutes.js')(app)
require('./app/routing/htmlRoutes.js')(app)
//listener
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT)
})