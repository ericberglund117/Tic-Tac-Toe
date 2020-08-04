var body = document.querySelector("body")
var gameBoard = document.querySelector(".game-board");
var cells = document.querySelectorAll(".cell");
var displayTurn = document.querySelector(".display");
var player1WinCounter = document.querySelector(".p1-win-counter")
var player2WinCounter = document.querySelector(".p2-win-counter")
var firstPlayer = new Player('X')
var secondPlayer = new Player("O")
var game = new Game(firstPlayer, secondPlayer);

var gameActive = true;
var cellsArray = Array.prototype.slice.call(cells)
// displayTurn.innerHTML = currentPlayerTurn();

// //eventListener
gameBoard.addEventListener('click', clickHandler);
//
// //functions

function clickHandler(event) {
  if (event.target.classList.contains('cell')) {
    game.checkCurrentPlayer();
    game.playMark();
  };
}




// function getWinsFromLocalStorage() {
//   if(localStorage.key('allWins')) {
//     wins = [];
//     var retrieveAllWins = localStorage.getItem('allWins');
//     var parseAllWins = JSON.parse(retrieveAllWins) || [];
//     for (var i = 0; i < parseAllWins.length; i++) {
//       currentWins = new Player(parseAllWins[i].wins)
//       wins.push(currentWins)
//     }
//   }
// }
