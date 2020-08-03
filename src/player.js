class Player {
  constructor(id, token, wins, move) {
    this.id = Date.now();
    this.token = token;
    this.wins = wins;
    this.move = move;
  }
  saveWinsToStorage(array) {
    var stringifyObject = JSON.stringify(array);
    localStorage.setItem('allWins', stringifyObject);
  }
  retrieveWinsFromStorage(array) {
    this.getWinsFromLocalStorage(array)
  }
}

var currentPlayer1 = new Player('X')
var currentPlayer2 = new Player('O')
