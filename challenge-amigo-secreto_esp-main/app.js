/**
 * Create a array to store the name of friends since the user input.
 */
let friends = [];

/**
 * Implementing a function that add a frind
 */
function addFriends() {
    let nameFriend = document.getElementById("amigo").value;
    if (nameFriend.trim() === "") {
        alert("Please insert a name: ");
    } else {
        friends.push(nameFriend);
        document.querySelector("#amigo").value = "";
        showListFriends();
    }
}

/**
 * Updates the display of the friends list in the DOM, creating <li> elements for each friend.
 */
function showListFriends() {
    
    let listFriends = document.querySelector("#listFriends");
    listFriends = innerHTML = "";

    for (let index = 0; index < friends.length; index++) {
        const element = friends[index];
        
        let listHTML = document.createElement("li");
        listHTML.textContent = element;
        listFriends.appendChild(listHTML);
    }
}

/**
 * Draws and displays a friend from the friends list at random
 * Check that the list is not empty before performing the draw
 */
function raffleFriend() {
    let totalFriends = friends.length;
    if (totalFriends === 0) {
        alert('Please, insert a name before of raffle');
    } else {
        let indexFriend = Math.floor(Math.random() * totalFriends);
        let resultHTML = document.querySelector("#result");
        resultHTML.innerHTML = friends[indexFriend];
    }
}



