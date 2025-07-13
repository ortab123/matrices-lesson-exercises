const Matrix = require("./Matrix");

class TicTacToe extends Matrix {
  constructor() {
    super(3, 3);
    this.lastPlayer = null;
  }

  loadBoard() {
    this.matrix = [];
    for (let r = 0; r < 3; r++) {
      const row = [];
      for (let c = 0; c < 3; c++) {
        row.push(".");
      }
      this.matrix.push(row);
    }
  }

  play(rowNum, columnNum, player) {
    const symbol = player === 1 ? "x" : "o";

    if (this.lastPlayer === player) {
      console.log(
        `Player ${player} already played! Wait for the other player.`
      );
      return;
    }

    if (this.matrix[rowNum][columnNum] !== ".") {
      console.log(`Cell [${rowNum}, ${columnNum}] is already taken!`);
      return;
    }

    this.matrix[rowNum][columnNum] = symbol;
    this.lastPlayer = player;

    let count = 0;
    for (let r = 0; r < this.rows; r++) {
      if (this.matrix[r][columnNum] === symbol) {
        count++;
      }
    }

    if (count === 3) {
      console.log(`Congratulations Player ${player}`);
      this.print();
      this.loadBoard();
      this.lastPlayer = null;
    }
  }
}

let board = new TicTacToe();
board.loadBoard();
board.play(2, 2, 1);
board.play(0, 0, 2);
board.play(0, 2, 1);
board.play(1, 0, 2);
board.play(1, 2, 1);
