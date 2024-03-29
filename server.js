// DEPENDENCIES
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Take the routes and uses them
// =============================================================
var htmlRouter = require("./app/routing/htmlRoutes")
app.use(htmlRouter)

var apiRouter = require("./app/routing/apiRoutes")
app.use(apiRouter)



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT: http://localhost:" + PORT);
});
