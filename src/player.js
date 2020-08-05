class Player {
  constructor(name, playerNumber) {
    this.name = name;
    this.playerNumber = playerNumber;
    this.wins = this.getWinsFromLocalStorage(name);
    this.moves = [];
  };

  saveWinsToStorage(player, wins) {
    var stringifyObject = JSON.stringify(wins);
    localStorage.setItem(player, stringifyObject);
  };

  retrieveWinsFromStorage(player) {
    this.getWinsFromLocalStorage(player);
  };

  getWinsFromLocalStorage(player) {
    if(localStorage.key(player)) {
      var retrieveAllWins = localStorage.getItem(player);
      var parseAllWins = JSON.parse(retrieveAllWins) || [];
        return parseAllWins;
    } else {
      return 0;
    }
  }
};

var firstPlayer = new Player('X', "firstPlayer");
var secondPlayer = new Player("O", "secondPlayer");
