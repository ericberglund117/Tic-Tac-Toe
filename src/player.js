class Player {
  constructor(name, playerNumber) {
    this.name = name;
    this.playerNumber = playerNumber;
    this.wins = this.getWinsFromLocalStorage(name);
    this.moves = [];
  }
  saveWinsToStorage(player, wins) {
    var stringifyObject = JSON.stringify(wins);
    localStorage.setItem(player, stringifyObject);
  }
  retrieveWinsFromStorage(player) {
    this.getWinsFromLocalStorage(player);
  }

  getWinsFromLocalStorage(player) {
    if(localStorage.key(player)) {
      var retrieveAllWins = localStorage.getItem(player);
      var parseAllWins = JSON.parse(retrieveAllWins) || [];
      // for (var i = 0; i < parseAllWins.length; i++) {
        // player.wins = parseAllWins;
        return parseAllWins;
    } else {
      return 0;
    }
  }
};

var firstPlayer = new Player('X', "firstPlayer");
var secondPlayer = new Player("O", "secondPlayer");



//need to find a way to diff between player 1 and player 2 wins in order to save into local storage
