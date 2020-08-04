class Game {
  constructor(player) {
    this.player1 = firstPlayer;
    this.player2 = secondPlayer;
    this.player1Turn = true;
    this.wins = Player.wins
    this.winCounter = 0;
    this.counter = 1;
    this.winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ]
  }

  start() {
    addPlayerListener();
    addResetListener();
  }

  addPlayerListener() {
    for(var i = 0; i < cellsArray.length - 1; i++) {
      cellsArray[i].addEventListener("click", playMark)
    }
  }

  checkCurrentPlayer() {
    if(this.player1Turn){
      var currentPlayer = this.player1
    } else {
      var currentPlayer = this.player2
    }
    return currentPlayer
  }

  playMark(){
    if(this.player1Turn) {
      this.player1.moves.push(parseInt(event.target.getAttribute("data-num")))
      console.log(this.player1.moves)
      event.target.innerHTML = "X";
      event.target.setAttribute("class","X");
      displayTurn.innerHTML = "It is O's turn";
      this.counter++;
      this.player1Turn = false;
      this.includesWin(this.winningCombos, this.player1.moves)
      this.checkForWin(this.player1.moves, "X");
      this.checkforDraw();
    } else {
      this.player2.moves.push(parseInt(event.target.getAttribute("data-num")))
      event.target.innerHTML = "O";
      event.target.setAttribute("class","O");
      displayTurn.innerHTML = "It is X's turn";
      this.counter++;
      this.player1Turn = true;
    }
    this.includesWin(this.winningCombos, this.player2.moves)
    this.checkForWin(this.player2.moves, "O");
    this.checkforDraw();
  }


  includesWin(winningCombos, moves) {
    for (var i = 0; i < winningCombos.length; i++) {
      if(!moves.includes(winningCombos[i])) {
        return false;
      }
    }
    return true;
  }

  checkForWin(movesArray, player) {
    // loop over the first array of winning combinations
    for (var i = 0; i < this.winningCombos.length; i++) {
      if(this.includesWin(this.winningCombos[i], movesArray)) {
        this.winCounter++
        this.wins.push(this.winCounter)
        console.log(this.wins)
        // disableCells();
        setTimeout(function() { alert(`Game over. ${player} wins!`); }, 3000)
      }
      //reset the cellCounter each time!
    //   this.winCounter = 0;
    //   // loop over each individual array
    //   for (var j = 0; j < winningCombos[i].length; j++) {
    //     // if the number in winning combo array is === a number in moves array, add to cellCounter
    //     if(movesArray.indexOf(winningCombos[i][j]) !== -1) {
    //     this.winCounter++;
    //     }
    //     // if cellCounter === 3 that means all 3 moves are winning combos and game is over!
    // if(this.winCounter === 3) {
          // timeout look at mdn and videos

      // window.setTimeout(function() { alert(`Game over. ${player.name} wins!`); }, 3000)
        }
      }

//   disableCells() {
//     for (var i = 0; i < cellsArray.length ; i++) {
//       cellsArray[i].innerHTML = "cell";
//       cellsArray[i].onclick = false;
//   }
// }

    checkforDraw() {
      if (this.counter >= 10) {
        displayTurn.innerHTML = "Game Over!";
        var conf = confirm("It's a draw, do you want to play again?");
        if(conf){
          resetBoard();
        }
      }
    };

  addResetListener() {
    var resetButton = document.querySelector("#reset");
    resetButton.addEventListener("click", resetBoard);
  }

  resetBoard() {
    for (var i = cellsArray.length - 1; i >= 0; i--) {
      cellsArray[i].innerHTML = "";
      cellsArray[i].setAttribute("class","cell");
    }
    this.player1.moves = [];
    this.player2.moves = [];
    this.counter = 0;
    // Counter = 1;
    displayTurn.innerHTML = "It is X's turn";
  }

};




  // if the counter is greater than or equal to 10, the game is a draw!




// create game board;
// allow players to mark game board;
// can't click on same cell twice or change mark already there;
// can't mark already marked cell;
// determine winning combo;
//if three across, diagonal, vertical = win;
// if win = board timeout and reset
// keep record of player wins
