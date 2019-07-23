// DEPENDENCIES
// =============================================================
var router = require("express").Router();
var path = require("path");


// ROUTES
// =============================================================
//Home page
router.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"../public/home.html"))
})


//Getting the html from survey
router.get("/survey",function(req,res){
    res.sendFile(path.join(__dirname,"../public/survey.html"))
})

//Default catch-all route
router.get("*",function(req,res){
    res.sendFile(path.join(__dirname,"../public/home.html"))
})


module.exports = router;