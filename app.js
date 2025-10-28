class GameLogic {
  constructor() {
    this.turn = document.querySelector(".turn");
    this.board = document.querySelector(".board");
    this.resetBtn = document.querySelector(".ghost");

    this.currentPlayer = "X";
    this.clickCell = [];

    this.winningpatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    this.countMoves = 0;
  }

  checkSelectedCell(e) {
    if (e.target.classList.contains("cell")) {
      if (e.target.textContent === "") {
        e.target.textContent = this.currentPlayer;
        // this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
        if (this.currentPlayer === "X") {
          this.currentPlayer = "O";
          this.turn.textContent = this.currentPlayer;
        } else {
          this.currentPlayer = "X";
          this.turn.textContent = this.currentPlayer;
        }
      }
    }
    this.countMoves++, this.checkWinner();
  }

  checkWinner() {
    let allCell = document.querySelectorAll(".cell");
    this.clickCell = [];
    allCell.forEach((cell) => {
      this.clickCell.push(cell.textContent);
    });
    for (let pattern of this.winningpatterns) {
      let index1 = pattern[0];
      let index2 = pattern[1];
      let index3 = pattern[2];

      let value1 = this.clickCell[index1];
      let value2 = this.clickCell[index2];
      let value3 = this.clickCell[index3];

      if (value1 === value2 && value2 === value3 && value1 !== "") {
        document.querySelector(
          ".winnerBtnDisplay"
        ).textContent = `${value1} won!`;
        return;
      }
    }
    if (this.countMoves === this.clickCell.length) {
      document.querySelector(".winnerBtnDisplay").textContent = "Its a draw!";
    }
  }

  resetBoard() {
    document.querySelectorAll(".cell").forEach((btn) => (btn.textContent = ""));
    this.currentPlayer = "X";
    this.countMoves = 0;
    this.turn.textContent = this.currentPlayer;
    document.querySelector(".winnerBtnDisplay").textContent = "";
  }

  addEventListeners() {
    this.board.addEventListener("click", (e) => this.checkSelectedCell(e));
    this.resetBtn.addEventListener("click", () => this.resetBoard());
  }
}

const ticTacToe = new GameLogic();
ticTacToe.addEventListeners();
