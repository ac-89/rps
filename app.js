let player;
let computer;

let computerPlay = function () {
  let randNum = Math.floor(Math.random() * 3);
  let plays = ["rock", "paper", "scissors"];
  computer = plays[randNum];
};

let gameCheck = function () {
  if (player == computer) {
    console.log("it's a draw");
  } else if (
    (computer == "rock" && player == "scissors") ||
    (computer == "scissors" && player == "paper") ||
    (computer == "paper" && player == "rock")
  ) {
    console.log("Computer is the winner!");
  } else {
    console.log("player wins!");
  }
};

let playerChoice = function () {
  player = prompt("Select Rock, Paper or Scissors");
  console.log(`Player chooses ${player}`);
  gameCheck();
};

computerPlay();
playerChoice();
console.log(`computer chooses ${computer}`);
