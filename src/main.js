window.onload = start;

var body = document.querySelector("body")
var gameBoard = document.querySelector(".game-board");
var cells = document.querySelectorAll(".cell")
var displayTurn = document.querySelector(".display")
var playerWinCounter = document.querySelector(".player-wins")
var counter = 1;
var winCounter = 0;
var xMoves = [];
var oMoves = [];
var markOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
var gameActive = true;
var currentPlayer = new Player('dave', 'X', [], [])
var winningMessage = `${currentPlayer} has won!`;
var drawMessage = 'Game ended in a draw!';
var cellsArray = Array.prototype.slice.call(cells)
// displayTurn.innerHTML = currentPlayerTurn();

// //eventListener
gameBoard.addEventListener('click', clickHandler);
//
// //functions

function clickHandler(event) {
  if (event.target.classList.contains('cell')) {
    playMark();
  };
}

function start() {
  addPlayerListener();
  addResetListener();
}

function addPlayerListener() {
  for(var i = 0; i < cellsArray.length - 1; i++) {
    cellsArray[i].addEventListener("click", playMark)
  }
}

function playMark(){
  if (event.target.className == "cell"){
    if (counter % 2 === 0) {
      oMoves.push(parseInt(event.target.getAttribute("data-num")));
      event.target.innerHTML = "O";
      event.target.setAttribute("class","O");
      displayTurn.innerHTML = "It is X's turn";
      counter++;
      checkForWin(oMoves, "O");
    }
    else {
      xMoves.push(parseInt(event.target.getAttribute("data-num")));
      event.target.innerHTML = "X";
      event.target.setAttribute("class","X");
      displayTurn.innerHTML = "It is O's turn";
      counter++;
      checkForWin(xMoves, "X");
    }
  // if the counter is greater than or equal to 10, the game is a draw!
  if (counter >= 10){
    displayTurn.innerHTML = "Game Over!";
    var conf = confirm("It's a draw, do you want to play again?");
    if(conf){
      resetBoard();
    }
  }
 }
}

function checkForWin(movesArray, name){
  // loop over the first array of winning combinations
  for (i = 0; i < winningCombos.length; i++) {
    // reset the winCounter each time!
    winCounter = 0;
    // loop over each individual array
    for (var j = 0; j < winningCombos[i].length; j++) {
      // if the number in winning combo array is === a number in moves array, add to winCounter
      if(movesArray.indexOf(winningCombos[i][j]) !== -1){
        winCounter++;
      }
      // if winCounter === 3 that means all 3 moves are winning combos and game is over!
      if(winCounter === 3){
        alert("Game over, " + name + " wins!");
        resetBoard();
      }
    }
  }
}

function addResetListener() {
  var resetButton = document.querySelector("#reset");
  resetButton.addEventListener("click", resetBoard);
}

function resetBoard() {
  for (var i = cellsArray.length - 1; i >= 0; i--) {
    cellsArray[i].innerHTML = "cell";
    cellsArray[i].setAttribute("class","cell");
  }
  oMoves = [];
  xMoves = [];
  winCounter = 0;
  counter = 1;
  displayTurn.innerHTML = "It is X's turn";
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
