let player;
let computer = null;
let playerScore = 0;
let computerScore = 0;

let computerPlay = function () {
  let randNum = Math.floor(Math.random() * 3);
  let plays = ["rock", "paper", "scissors"];
  computer = plays[randNum];
  console.log(`Player score is ${playerScore}`);
  console.log(`Computer score is ${computerScore}`);
};

let gameCheck = function () {
  if (player == computer) {
    console.log("it's a draw");
    scoreCheck();
  } else if (
    (computer == "rock" && player == "scissors") ||
    (computer == "scissors" && player == "paper") ||
    (computer == "paper" && player == "rock")
  ) {
    console.log("Computer is the winner!");
    computerScore++;
    scoreCheck();
  } else {
    console.log("player wins this round!");
    if (player != null) {
      playerScore++;
    }
    scoreCheck();
  }
};

let scoreCheck = function () {
  if (playerScore == 5) {
    console.log("Player wins!");
  } else if (computerScore == 5) {
    console.log("Computer wins!");
  } else {
    computerPlay();
    playerChoice();
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
