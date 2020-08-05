class Player {
  constructor(name, playerNumber) {
    this.name = name;
    this.playerNumber = playerNumber;
    this.wins = 0;
    this.moves = [];
  }
  saveWinsToStorage(player, wins) {
    var stringifyObject = JSON.stringify(wins);
    localStorage.setItem(player, stringifyObject);
  }
  retrieveWinsFromStorage(array) {
    this.getWinsFromLocalStorage(array)
  }
}

var firstPlayer = new Player('X', "firstPlayer");
var secondPlayer = new Player("O", "secondPlayer");



//need to find a way to diff between player 1 and player 2 wins in order to save into local storage
