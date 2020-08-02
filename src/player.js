class Player {
  constructor(id, token, wins) {
    this.id = id;
    this.token = token;
    this.wins = wins;
  }
  saveWinsToStorage(array) {
    var stringifyObject = JSON.stringify(array);
    localStorage.setItem('allWins', stringifyObject);
  }
  retrieveWinsFromStorage(array) {
    this.getWinsFromLocalStorage(array)
  }
}
