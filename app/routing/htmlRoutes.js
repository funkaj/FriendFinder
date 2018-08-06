// server = require('../../server')
// const express = require("express");
// const bodyParser = require("body-parser");
// const path = require("path");
// const app = express();
// const PORT = 8080;

// function htmlRoutes() {
//   app.use(function(req, res){
//     routes = {
//       '/': '../public/home.html',
//       '/survey': '../public/survey.html'
//     };

//     let url = req.url;

//     if (routes[url] !== undefined) {
//         res.writeHead(200, {"Content-Type": "text/plain"});
//         res.sendfile(route[url]);
//         console.log("Client requested", url);
//     } else {
//         res.writeHead(404, {"Content-Type": "text/plain"});
//         res.sendfile('404.html');
//         console.log("Client requested page not found - 404 error");
//     }
// });
// }
// module.exports = htmlRoutes