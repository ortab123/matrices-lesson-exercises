/* Write your code below */
class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.matrix = [];
    this.generateMatrix();
  }

  generateMatrix() {
    let counter = 1;
    for (let r = 0; r < this.rows; r++) {
      const row = [];
      for (let c = 0; c < this.cols; c++) {
        row.push(counter++);
      }
      this.matrix.push(row);
    }
  }

  print = (matrix) => {
    for (let r = 0; r < this.rows; r++) {
      let line = "";
      for (let c = 0; c < this.cols; c++) {
        line += this.matrix[r][c] + "\t";
      }
      console.log(line);
    }
  };

  get = (rowNum, colNum) => {
    return this.matrix[rowNum][colNum];
  };

  alter = (rowNum, colNum, newNum) => {
    this.matrix[rowNum][colNum] = newNum;
  };

  printColumn(colNum) {
    for (let r = 0; r < this.rows; r++) {
      console.log(this.matrix[r][colNum]);
    }
  }

  printRow(rowNum) {
    for (let c = 0; c < this.cols; c++) {
      console.log(this.matrix[rowNum][c]);
    }
  }

  findCoordinate(value) {
    const coor = {
      x: 0,
      y: 0,
    };

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        if (this.matrix[r][c] === value) {
          coor.x = r;
          coor.y = c;
          return coor;
        }
      }
    }
    return null;
  }
}

//You can paste the code from the lesson below to test your solution
let m = new Matrix(3, 4);
m.print();
m.alter(0, 0, m.get(1, 1));
m.printColumn(0);
m.printRow(0);
console.log(m.findCoordinate(12));
console.log(m.findCoordinate(7));

/* Do not remove the exports below */
module.exports = Matrix;
