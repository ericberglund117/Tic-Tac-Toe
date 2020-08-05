var body = document.querySelector("body")
var gameBoard = document.querySelector(".game-board");
var cells = document.querySelectorAll(".cell");
var displayTurn = document.querySelector(".display");
var player1WinCounter = document.querySelector(".p1-win-counter")
var player2WinCounter = document.querySelector(".p2-win-counter")

var game = new Game(firstPlayer, secondPlayer);
var cellsArray = Array.prototype.slice.call(cells);



gameBoard.addEventListener('click', clickHandler);
window.addEventListener('load', function () {
  game.countWins();
});

function clickHandler(event) {
  if (event.target.classList.contains('cell')) {
    game.checkCurrentPlayer();
    game.playMark();
    game.checkForWin();
  }
}
