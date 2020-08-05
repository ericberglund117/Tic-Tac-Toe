var body = document.querySelector("body")
var gameBoard = document.querySelector(".game-board");
var cells = document.querySelectorAll(".cell");
var displayTurn = document.querySelector(".display");
var player1WinCounter = document.querySelector(".p1-win-counter")
var player2WinCounter = document.querySelector(".p2-win-counter")

var game = new Game(firstPlayer, secondPlayer);
var cellsArray = Array.prototype.slice.call(cells);
// displayTurn.innerHTML = currentPlayerTurn();

// //eventListener
gameBoard.addEventListener('click', clickHandler);
window.addEventListener('load', function () {
  game.countWins();
});
// //functions
function clickHandler(event) {
  if (event.target.classList.contains('cell')) {
    game.checkCurrentPlayer();
    game.playMark();
    game.checkForWin();
  }
}


// function getWinsFromLocalStorage(player) {
//   if(localStorage.key(player)) {
//     wins = [];
//     if(player === "X") {
//
//     }
//     var retrieveAllWins = localStorage.getItem(player);
//     var parseAllWins = JSON.parse(retrieveAllWins) || [];
//     for (var i = 0; i < parseAllWins.length; i++) {
//       currentWins = new Player(parseAllWins[i].player.wins)
//       wins.push(currentWins)
//     }
//   }
// }
