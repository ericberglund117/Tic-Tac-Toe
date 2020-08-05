class Game {
  constructor(firstPlayer, secondPlayer) {
    this.player1 = firstPlayer;
    this.player2 = secondPlayer;
    this.player1Turn = true;
    this.wins = [firstPlayer.wins] || [secondPlayer.wins];
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
      ];
  };

  start() {
    var game = new Game(firstPlayer, secondPlayer);
  };

  checkCurrentPlayer() {
    if(this.player1Turn) {
      var currentPlayer = this.player1
    } else {
      var currentPlayer = this.player2
    }
    return currentPlayer;
  };

  playMark() {
    if(this.player1Turn) {
      this.player1.moves.push(parseInt(event.target.getAttribute("data-num")));
      event.target.innerHTML = "X";
      event.target.style.fontSize = "2rem";
      displayTurn.innerHTML = "It is O's turn";
      this.counter++;
      this.player1Turn = false;
      this.checkForWin(this.player1.moves, "X");
    } else {
      this.player2.moves.push(parseInt(event.target.getAttribute("data-num")));
      event.target.innerHTML = "O";
      event.target.style.fontSize = "2rem";
      displayTurn.innerHTML = "It is X's turn";
      this.counter++;
      this.player1Turn = true;
      this.checkForWin(this.player2.moves, "O");
    }
    this.checkforDraw();
  };

  disableEnableCells() {
    if(this.win) {
      this.gameActive = false;
      gameBoard.removeEventListener('click', clickHandler);
    }
    this.resetBoard();
  };

  checkForWin(movesArray, player) {
    for (var i = 0; i < this.winningCombos.length; i++) {
      this.winCounter = 0;
      for (var j = 0; j < this.winningCombos[i].length; j++) {
          if(movesArray.indexOf(this.winningCombos[i][j]) !== -1) {
          this.winCounter++;
        };
      if(this.winCounter === 3) {
          this.win = true;
          this.counter = 0;
          if(player === "X") {
            this.player1.wins++;
            this.player1.saveWinsToStorage(player, this.player1.wins);
          } else {
            this.player2.wins++;
            this.player2.saveWinsToStorage(player, this.player2.wins);
          };
          alert(`Game over. ${player} wins! Do you want to play again?`, 2000)
          this.disableEnableCells();
          var delayRestart = window.setTimeout(this.resetBoard, 2000)
          this.countWins();
        };
      };
    };
  };

  countWins() {
    if(this.player1.wins > 0) {
      player1WinCounter.innerHTML = `${this.player1.wins} Wins`;
    }
    if(this.player2.wins > 0) {
      player2WinCounter.innerHTML = `${this.player2.wins} Wins`;
    };
  };

  checkforDraw() {
    if (this.counter >= 10) {
      displayTurn.innerHTML = "Game Over!";
      var conf = confirm("It's a draw, do you want to play again?");
      if(conf){
        this.resetBoard();
      };
    };
  };

  resetBoard() {
    if(this.win = true) {
      for (var i = cellsArray.length - 1; i >= 0; i--) {
        cellsArray[i].innerHTML = "";
        cellsArray[i].style.fontSize = "2rem";
        cellsArray[i].setAttribute("class","cell");
      };
      this.gameActive = true;
      firstPlayer.moves = [];
      secondPlayer.moves = [];
      this.counter = 0;
      this.gameActive = true;
      gameBoard.addEventListener('click', clickHandler);
    };
  };
};
