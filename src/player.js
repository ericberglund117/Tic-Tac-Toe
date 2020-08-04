class Player {
  constructor(name, playerNumber) {
    this.name = name;
    this.playerNumber = playerNumber;
    this.wins = 0;
    this.moves = [];
  }
  saveWinsToStorage(array) {
    var stringifyObject = JSON.stringify(array);
    localStorage.setItem('allWins', stringifyObject);
  }
  retrieveWinsFromStorage(array) {
    this.getWinsFromLocalStorage(array)
  }
}

var firstPlayer = new Player('X', "firstPlayer")
var secondPlayer = new Player("O", "secondPlayer")

//need to find a way to diff between player 1 and player 2 wins in order to save into local storage
