
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

        //[1,1,1,1,1]
        //[5,1,4,4,5]
        //
        //loop through the ARRAY


        //for (var i = 0; i < friendsData.length; i++) {
        for (var i = 0; i < friendsData.length; i++) {
            var selectedFriend = friendsData[i].scores
            compare(selectedFriend, newFriend.scores)
        }


        function compare(arr1, arr2) {
            var compatibleScore= 0;

            for (var i = 0; i < arr2.length; i++) {
               compatibleScore += Math.abs(parseInt(arr1[i])-parseInt(arr2[i]))
               
            }
            console.log(compatibleScore)
            return compatibleScore 
        }

    })

}
