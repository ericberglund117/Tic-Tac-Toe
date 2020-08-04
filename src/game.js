class Game {
  constructor(player) {
    this.player1 = firstPlayer;
    this.player2 = secondPlayer;
    this.player1Turn = true;
    this.wins = [player.wins]
    this.winCounter = 0;
    this.counter = 1;
    this.win = false;
    this.gameActive = true;
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

  // start() {
  //   addPlayerListener();
  //   // addResetListener();
  // }
  //
  // addPlayerListener() {
  //   for(var i = 0; i < cellsArray.length - 1; i++) {
  //     cellsArray[i].addEventListener("click", this.playMark)
  //   }
  // }

  // createBoard (cellsArray) {
  //   for(var i = 0; i < cellsArray.length - 1; i++) {
  //     cellsArray[i].inner
  //   }
  // }

  checkCurrentPlayer() {
    if(this.player1Turn) {
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
      event.target.style.fontSize = "2rem";
      displayTurn.innerHTML = "It is O's turn";
      this.counter++;
      this.player1Turn = false;
      // this.includesWin(this.winningCombos, this.player1.moves)
      this.checkForWin(this.player1.moves, "X");
    } else {
      this.player2.moves.push(parseInt(event.target.getAttribute("data-num")))
      console.log(this.player2.moves)
      event.target.innerHTML = "O";
        event.target.style.fontSize = "2rem";
      displayTurn.innerHTML = "It is X's turn";
      this.counter++;
      this.player1Turn = true;
      // this.includesWin(this.winningCombos, this.player2.moves)
      this.checkForWin(this.player2.moves, "O");
    }
    this.checkforDraw();
  }


  // includesWin(winningCombos, moves) {
  //   for (var i = 0; i < winningCombos.length; i++) {
  //     console.log(moves)
  //     if(!moves.includes(winningCombos[i])) {
  //      this.win = false;
  //     }
  //   }
  //   this.win = true;
  // }

  disableEnableCells() {
    if(this.win) {
      this.gameActive = false;
      gameBoard.removeEventListener('click', clickHandler);
    }
    this.resetBoard();
  }

  checkForWin(movesArray, player) {
    // loop over the first array of winning combinations
    for (var i = 0; i < this.winningCombos.length; i++) {
      //reset the cellCounter each time!
      this.winCounter = 0;
      // loop over each individual array
      for (var j = 0; j < this.winningCombos[i].length; j++) {
        // if the number in winning combo array is === a number in moves array, add to cellCounter
        if(movesArray.indexOf(this.winningCombos[i][j]) !== -1) {
        this.winCounter++;
      };
        // if cellCounter === 3 that means all 3 moves are winning combos and game is over!
    if(this.winCounter === 3) {
        this.win = true;
        this.counter = 0;
        this.wins++
        console.log(this.wins)
        this.disableEnableCells()
        alert(`Game over. ${player} wins! Do you want to play again?`, 2000)
        var delayRestart = window.setTimeout(this.resetBoard, 2000)
      }
    }
  }
};
    // if(this.includesWin(this.winningCombos[i], movesArray)) {
      //     this.win
      //     this.winCounter++
      //     this.wins.push(this.winCounter)
      //     console.log(this.wins)
      //     this.disableEnableCells()
      //     alert(`Game over. ${player} wins! Do you want to play again?`, 2000)
      //     var delayRestart = window.setTimeout(this.resetBoard, 4000)
      //   }



    checkforDraw() {
      if (this.counter >= 10) {
        displayTurn.innerHTML = "Game Over!";
        var conf = confirm("It's a draw, do you want to play again?");
        if(conf){
          this.resetBoard();
        }
      }
    };

  // addResetListener() {
  //   var resetButton = document.querySelector("#reset");
  //   resetButton.addEventListener("click", resetBoard);
  // }

  resetBoard() {
    if(this.win = true) {
      for (var i = cellsArray.length - 1; i >= 0; i--) {
        cellsArray[i].innerHTML = "";
        cellsArray[i].style.fontSize = "2rem";
        cellsArray[i].setAttribute("class","cell");
      }
      this.gameActive = true;
      firstPlayer.moves = [];
      secondPlayer.moves = [];
      this.counter = 0;
      this.gameActive = true;
      gameBoard.addEventListener('click', clickHandler);
    }
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
