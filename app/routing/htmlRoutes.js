// DEPENDENCIES
// =============================================================
var path = require("path");


// ROUTES
// =============================================================
module.exports = function (router) {
    //Home page
    router.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    })


    //Getting the html from survey
    router.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })

    //Default catch-all route
    router.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    })

}