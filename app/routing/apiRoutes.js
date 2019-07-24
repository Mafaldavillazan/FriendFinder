// DEPENDENCIES
// =============================================================
var router2 = require("express").Router();
var path = require("path");

// LOAD DATA
// =============================================================
var friendsData = require("../data/friends.js");

// API
// =============================================================
//Gets the routes for friends
router2.get("/api/fiends",function(req,res){
    res.JSON(friendsData)
})

//Gets the routes for friends
router2.post("/api/fiends",function(req,res){
    //Handles the incoming data
    var newFriend = req.body;
    
    //Push into into the arry inside the data
    friendsObj.push(newFriend)
    res.json(newFriend)
    //Compatibility logic
})

module.exports = router2;
