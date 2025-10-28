class GameLogic {
  constructor() {
    this.turn = document.querySelector(".turn");
    this.board = document.querySelector(".board");
    this.resetBtn = document.querySelector(".ghost");

    this.currentPlayer = "X";
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
  }

  resetBoard() {
    document.querySelectorAll(".cell").forEach((btn) => (btn.textContent = ""));
    this.currentPlayer = "X";
    this.turn.textContent = this.currentPlayer;
  }

  //Tomorrows checklist
  /*
    1. Track or create the win and draw functionality
    2. Display who ever won in it card
  
  */

  addEventListeners() {
    this.board.addEventListener("click", (e) => this.checkSelectedCell(e));
    this.resetBtn.addEventListener("click", () => this.resetBoard());
  }
}

const ticTacToe = new GameLogic();
ticTacToe.addEventListeners();
