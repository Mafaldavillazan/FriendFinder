// DEPENDENCIES
// =============================================================
var router = require("express").Router();
var path = require("path");


//Getting the html from survey
router.get("/survey",function(req,res){
    res.sendFile(path.join(__dirname,"../public/survey.html"))
})


module.exports = router;