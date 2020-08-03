class Game {
  constructor(player) {
    this.turn = currentPlayer.id;
    this.move = currentPlayer.move;
    this.markPlaced = [];
  }

  markGameBoard(position, mark) {
    board.position = mark;
    playMark();
  }

  printBoard() {
    createBoard();

  }
  swapTurns(Player){
    player1 = !player1
  }
};



// create game board;
// allow players to mark game board;
// can't click on same cell twice or change mark already there;
// can't mark already marked cell;
// determine winning combo;
//if three across, diagonal, vertical = win;
// if win = board timeout and reset
// keep record of player wins
