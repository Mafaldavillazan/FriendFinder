
// LOAD DATA
// =============================================================
var friendsData = require("../data/friends.js");

// API
// =============================================================
module.exports = function (router) {

    //Gets the routes for friends
    router.get("/api/friends", function (req, res) {
        res.json(friendsData)
    })

    //Gets the routes for friends
    router.post("/api/friends", function (req, res) {
        //Handles the incoming data
        var newFriend = req.body;

        //Push into into the arry inside the data
        friendsData.push(newFriend)
        res.json(newFriend)
        //Compatibility logic
    })

}
