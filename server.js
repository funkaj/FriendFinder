const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const PORT = process.env.PORT || 8080

//parsing data
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('./app/public/css'))
app.use(express.static('./app/images'))

//routes
require('./app/routing/apiRoutes.js')(app)
require('./app/routing/htmlRoutes.js')(app)


//listener
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT)
})