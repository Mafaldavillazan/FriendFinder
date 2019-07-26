
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

    //Caroline help me develop this part
    //Gets the routes for friends
    router.post("/api/friends", function (req, res) {

        function compatible(req) {
            var newFriend = req.body.scores;
            //Create empty arrays to add the values
            var finalScore = []
            var compareArr = []

            for (var i = 0; i < friendsData.length; i++) {
                //Difference between the person and me
                var compatibleScore = 0
                compareArr = []
                for (var a = 0; a < newFriend.length; a++) {
                    compatibleScore = friendsData[i].scores[a] - newFriend[a]
                    compatibleScore = Math.abs(compatibleScore)
                    compareArr.push(compatibleScore)
                }
                //Sum all the values on an array
                var sum = compareArr.reduce(function (a, b) { return a + b; }, 0);
                finalScore.push(sum)
            }

            //Function that looks through the array and tells you which one is the smallest
            //Aply beacuse is an array
            var smallest = Math.min.apply(null, finalScore)
            //Function to see which index is the one represented of the winner
            var match = finalScore.indexOf(smallest)
            console.log(friendsData[match])
            res.json(friendsData[match])

        }

        compatible(req)

    })

  


    // //i dont know why is not executing this function and changing the variable
    // router.post("/api/selected", function (req, res) {
    //     var newFriend = friendsData[friendsData.length-1];
    //     searchFriend(newFriend)


    //     function searchFriend(newFriend) {

    //         console.log("____ NEW FREIND ____")
    //         console.log(newFriend)
    //         for (var i = 0; i < friendsData.length; i++) {
    //             //skip me
    //             console.log("____ THE FRIEND ____")
    //             console.log(friendsData[i])
    //             if (friendsData[i].name === newFriend.name) continue


    //             var selectedFriend = friendsData[i].scores
    //             var result = compare(selectedFriend, newFriend.scores)
    //             console.log("____ THE SELECTED FRIEND ____")
    //             console.log(selectedFriend)
    //             console.log("____ BEST MATCH ____")
    //             console.log(bestMatch)

    //             //Add  the smallest value
    //             if (res.points === 50 || bestMatch.points > result) {
    //                 // Push that value friendSelected

    //                 console.log("____ BEST MATCH POINTS ____")
    //                 console.log(bestMatch.points)

    //                 bestMatch.name = friendsData[i].name
    //                 bestMatch.photo = friendsData[i].photo
    //                 bestMatch.points = result

    //             }
    //         }
    //         return bestMatch
    //     }

    //     function compare(arr1, arr2) {
    //         var compatibleScore = 0;
    //         for (var i = 0; i < arr2.length; i++) {
    //             //Takes the value and can make the subtract without having to worry about the -
    //             compatibleScore += Math.abs(parseInt(arr1[i]) - parseInt(arr2[i]))


    //         }
    //         return compatibleScore
    //     }

    //     res.json(bestMatch)
    // })




}
