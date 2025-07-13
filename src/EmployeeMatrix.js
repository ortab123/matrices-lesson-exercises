const Matrix = require("./Matrix");

/* Write your code below */
class EmployeeMatrix extends Matrix {
  constructor(rows, cols) {
    super(rows, cols);
  }

  loadData(salaryData) {
    const empMatrix = salaryData.map((employee) => Object.values(employee));
    this.matrix = empMatrix;
    this.rows = empMatrix.length;
    this.cols = empMatrix[0].length;
  }

  getEmployees(department) {
    const employeesByDepartments = [];
    for (let r = 0; r < this.rows; r++) {
      if (this.matrix[r][2] === department) {
        employeesByDepartments.push(this.matrix[r][1]);
      }
    }
    return employeesByDepartments;
  }

  getTotalSalary(department) {
    let sumTotalSalary = 0;
    for (let r = 0; r < this.rows; r++) {
      if (this.matrix[r][2] === department) {
        sumTotalSalary += this.matrix[r][3];
      }
    }
    return sumTotalSalary;
  }

  findRichest() {
    let richestEmployee = null;
    let highestSalary = 0;
    for (let r = 0; r < this.rows; r++) {
      if (highestSalary < this.matrix[r][3]) {
        highestSalary = this.matrix[r][3];
        richestEmployee = this.matrix[r][1];
      }
    }
    return richestEmployee;
  }
}

//You can paste the code from the lesson below to test your solution
let data = [
  { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
  { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
  { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
  { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
  { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
  { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 },
];

let m = new EmployeeMatrix();

m.loadData(data);
m.print();
console.log(m.getEmployees("Finance"));
console.log(m.getEmployees("Design"));
console.log(m.getTotalSalary("Finance")); //prints 4300
console.log(m.getTotalSalary("Design")); //prints 5300
console.log(m.findRichest());

/* Do not remove the exports below */
module.exports = EmployeeMatrix;
