
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

        searchFriend(newFriend)


        //[3,1,3,1]
        //[5,1,4,4]
        // 2 0 1 3 

        //for (var i = 0; i < friendsData.length; i++) {
        function searchFriend(newFriend) {
            //Array max no compatible is 50
            //var friendSelectedScore = [50]

            var friendSelected = []
            var friendSelectedScore = [0]

            for (var i = 0; i < friendsData.length; i++) {
                //skip me
                if (friendsData[i].name === newFriend.name) continue


                var selectedFriend = friendsData[i].scores
                var result = compare(selectedFriend, newFriend.scores)


                //"" WHY is it console logging 0
                //console.log(result)

                checkCompatibility(result, friendSelectedScore, friendSelected, friendsData[i])

            }
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


        function checkCompatibility(res, selectedScore, selectedPerson, newSel) {
            //If that value is smaller than the one there then...
            if (selectedScore[0] === 0 || selectedScore[0] > res) {
                // Push that value friendSelected
                selectedScore = []
                selectedScore.push(res)
                console.log("arr")
                console.log(selectedScore)

                //Delete de value of the selected object
                selectedPerson = []
                selectedPerson.push(newSel)
                console.log("newSel")
                console.log(selectedPerson)
            }

            else {
                //delete the value inside the array
                selectedScore = []
                console.log("We are here!")
            }
        } return

    })

}
