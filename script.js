// Define the Game class
class Game {
    constructor(title, status) {
        this.title = title;
        this.status = status;
    }
}

function saveGame() {
    var userTitle = document.getElementById("titleText").value;
    
    // Get the user radio button using querySelector
    const userStatus = document.querySelector('input[name="status"]:checked');
    const userStatusText = userStatus.value;

    var myGame = new Game(userTitle, userStatusText);
    gameList.push(myGame);
    console.log(gameList);
    gameInfoElement.innerHTML = `Title: ${myGame.title} <br> 
                                 Status: ${myGame.status} <br>`;
}

var myGame = new Game("Minecraft", "Want to play");
var gameList = [myGame];

// Get the paragraph element by its ID
var gameInfoElement = document.getElementById("gameInfo");

// Display the game information in the paragraph
gameInfoElement.innerHTML = `Title: ${myGame.title} <br> 
                             Status: ${myGame.status} <br>`;
