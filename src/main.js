var body = document.querySelector("body")
var gameBoard = document.querySelector(".game-board");
var cells = document.querySelectorAll(".cell");
var displayTurn = document.querySelector(".display");
var player1WinCounter = document.querySelector(".p1-win-counter")
var player2WinCounter = document.querySelector(".p2-win-counter")

var game = new Game(firstPlayer, secondPlayer);
var cellsArray = Array.prototype.slice.call(cells);



gameBoard.addEventListener('click', runGame);
window.addEventListener('load', function () {
  game.countWins();
});

function runGame(event) {
  if (event.target.classList.contains('cell')) {
    game.checkCurrentPlayer();
    game.playMark();
    game.checkForWin();
  }
}

// function resetBoard() {
//   if(this.win = true) {
//     for (var i = cellsArray.length - 1; i >= 0; i--) {
//       cellsArray[i].innerHTML = "";
//       cellsArray[i].style.fontSize = "2rem";
//       cellsArray[i].setAttribute("class","cell");
//     };
//     this.gameActive = true;
//     firstPlayer.moves = [];
//     secondPlayer.moves = [];
//     this.counter = 0;
//     this.gameActive = true;
//     gameBoard.addEventListener('click', runGame);
//   };
// };
