
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

        var compatible = searchFriend(newFriend)
        
        friendsData.push(compatible)
        res.json(compatible)

        //for (var i = 0; i < friendsData.length; i++) {
        function searchFriend(newFriend) {
            //Array max no compatible is 50
            //var friendSelectedScore = [50]

            var friendSelected = []
            var friendSelectedScore = [50]

            for (var i = 0; i < friendsData.length; i++) {
                //skip me
                if (friendsData[i].name === newFriend.name) continue


                var selectedFriend = friendsData[i].scores
                var result = compare(selectedFriend, newFriend.scores)

                //Add  the smallest value
                if (friendSelectedScore[0] === 50 || friendSelectedScore[0] > result) {
                    // Push that value friendSelected
                    friendSelectedScore = []
                    friendSelectedScore.push(result)
                

                    //Delete de value of the selected object
                    friendSelected = []
                    friendSelected.push(friendsData[i])
            
                }

            }
            //console.log(friendSelected)
            return friendSelected
        }

        function compare(arr1, arr2) {
            var compatibleScore = 0;
            for (var i = 0; i < arr2.length; i++) {
                //Takes the value and can make the subtract without having to worry about the -
                compatibleScore += Math.abs(parseInt(arr1[i]) - parseInt(arr2[i]))


            }
            return compatibleScore
        }

        //I want to push the value of that selection
    })

}
