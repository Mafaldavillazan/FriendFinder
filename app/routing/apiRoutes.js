
// LOAD DATA
// =============================================================
var friendsData = require("../data/friends.js");

// API
// =============================================================
module.exports = function (router) {

    //Gets the routes for friends
    router.get("/api/fiends", function (req, res) {
        res.JSON(friendsData)
    })

    //Gets the routes for friends
    router.post("/api/fiends", function (req, res) {
        //Handles the incoming data
        var newFriend = req.body;

        //Push into into the arry inside the data
        friendsObj.push(newFriend)
        res.json(newFriend)
        //Compatibility logic
    })

}
