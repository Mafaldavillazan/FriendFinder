// DEPENDENCIES
// =============================================================
var router = require("express").Router();
var path = require("path");

// LOAD DATA
// =============================================================
var friendsData = require("../data/friends.js");

// API
// =============================================================
//Gets the routes for friends
router.get("/api/fiends",function(req,res){
    res.JSON(friendsData)
})

//Gets the routes for friends
router.post("/api/fiends",function(req,res){
    //Handles the incoming data
    //Compatibility logic
})

