// Define the Game class
class Game {
    constructor(title, status, hours) {
        this.title = title;
        this.status = status;
        this.hours = hours;
    }

}

function saveGame() {
    var userTitle = document.getElementById("titleText").value;
    
    // Get the user radio button using querySelector
    const userStatus = document.querySelector('input[name="status"]:checked');
    const userStatusText = userStatus.value;

    var userHours = document.getElementById("hoursText").value;

    var myGame = new Game(userTitle, userStatusText, userHours);

    gameList.push(myGame);
    console.log(gameList);
    gameInfoElement.innerHTML = `Title: ${myGame.title} <br> 
                                 Status: ${myGame.status} <br> 
                                 Hours: ${myGame.hours}`;
    fetch('http://localhost:8080')
        
        .then(response => response.text())
        .then(text => console.log(text))
}

var myGame = new Game("Minecraft", "Want to play", "35");
var gameList = [myGame];

// Get the paragraph element by its ID
var gameInfoElement = document.getElementById("gameInfo");

// Display the game information in the paragraph
gameInfoElement.innerHTML = `Title: ${myGame.title} <br> 
                            Status: ${myGame.status} <br> 
                            Hours: ${myGame.hours}`;
