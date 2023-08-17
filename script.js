// Define the Game class
class Game {
    constructor(title, status, hours) {
        this.title = title;
        this.status = status;
        this.hours = hours;
    }
    static fromJSON(json) {
        return new Game(json.title, json.status, json.hours);
    }

    static toString() {
        return `Title: ${this.title}, Status: ${this.status}, Hours: ${this.hours}`;
    }
}
gameList = [];

// This should add the game and send it to the server
function saveGame() {
    var userTitle = document.getElementById("titleText").value;
    
    // Get the user radio button using querySelector
    const userStatus = document.querySelector('input[name="status"]:checked');
    const userStatusText = userStatus.value;

    var userHours = document.getElementById("hoursText").value;

    // add game to gameList
    var myGame = new Game(userTitle, userStatusText, userHours);
    gameList.push(myGame);
    showGames();

    // save to server
    fetch('http://localhost:8080/save/game', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(myGame)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

// this should retrieve gameList from the backend server and overwrite the gameList
function getGame() {

    gameList = [];

    fetch('http://localhost:8080/games')
    .then(response => response.json())
    .then(data => {
        data.forEach(gameData => {
            const myGame = new Game(gameData.title, gameData.status, gameData.hours);
            myGame.toString();
            gameList.push(myGame);
        })
        showGames();
    })
    .catch(error => console.error('Error', error));
}

function showGames() {
    gameInfoElement.innerHTML = '<p>Show Games</p>';
    gameList.forEach(game => {
        const gameObj = game;
        const gameInfo = `
        <p>Title: ${gameObj.title}</p>
        <p>Status: ${gameObj.status}</p>
        <p>Hours: ${gameObj.hours}</p>
        <hr>
      `;
      gameInfoElement.innerHTML += gameInfo
    });
}

var myGame = new Game("Placeholder", "Placeholder", "Placeholder");
gameList.push(myGame);

// Get the paragraph element by its ID
var gameInfoElement = document.getElementById("gameInfo");
showGames();
