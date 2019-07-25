
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

    })

    //Variable with the best match info
    var bestMatch = {
        name: "AMIR",
        photo: "https://images.unsplash.com/photo-1465931577419-3e7f810dc552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",
        points: 50
    }

    router.get("/api/selected", function (req, res) {
        res.json(bestMatch)
    })


    router.post("/api/selected", function (req, res) {

        searchFriend(newFriend)

        //for (var i = 0; i < friendsData.length; i++) {
        function searchFriend(newFriend) {
            //Array max no compatible is 50
            //var friendSelectedScore = [50]
            console.log("____ NEW FREIND ____")
            console.log(newFriend)
            for (var i = 0; i < friendsData.length; i++) {
                //skip me
                console.log("____ THE FRIEND ____")
                console.log(friendsData[i])
                if (friendsData[i].name === newFriend.name) continue


                var selectedFriend = friendsData[i].scores
                var result = compare(selectedFriend, newFriend.scores)
                console.log("____ THE SELECTED FRIEND ____")
                console.log(selectedFriend)
                console.log("____ BEST MATCH ____")
                console.log(bestMatch)

                //Add  the smallest value
                if (res.points === 50 || bestMatch.points > result) {
                    // Push that value friendSelected

                    console.log("____ BEST MATCH POINTS ____")
                    console.log(bestMatch.points)

                    bestMatch.name = friendsData[i].name
                    bestMatch.photo = friendsData[i].photo
                    bestMatch.points = result

                }
            }
            return bestMatch
        }

        function compare(arr1, arr2) {
            var compatibleScore = 0;
            for (var i = 0; i < arr2.length; i++) {
                //Takes the value and can make the subtract without having to worry about the -
                compatibleScore += Math.abs(parseInt(arr1[i]) - parseInt(arr2[i]))


            }
            return compatibleScore
        }

        res.json(bestMatch)
    })




}
