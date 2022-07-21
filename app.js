let player;
let computer = null;
let playerScore = 0;
let computerScore = 0;
const rock = document.querySelector(".rock-btn");
const paper = document.querySelector(".paper-btn");
const scissors = document.querySelector(".scissors-btn");
const playChoice = document.querySelector(`.play-choice`);
const compChoice = document.querySelector(".comp-choice");
const compScore = document.querySelector(".comp-score");
const playScore = document.querySelector(".play-score");
const resultText = document.querySelector(".result");

let computerPlay = function (e) {
  let randNum = Math.floor(Math.random() * 3);
  let plays = ["rock", "paper", "scissors"];
  computer = plays[randNum];
  console.log(computer);
  playScore.textContent = `${playerScore}`;
  console.log(`Computer score is ${computerScore}`);
};

let gameCheck = function () {
  if (player == computer) {
    resultText.textContent = "it's a draw";
    scoreCheck();
  } else if (
    (computer == "rock" && player == "scissors") ||
    (computer == "scissors" && player == "paper") ||
    (computer == "paper" && player == "rock")
  ) {
    resultText.textContent = "Computer is the winner!";
    computerScore++;
    compScore.textContent = `${computerScore}`;
    scoreCheck();
  } else {
    resultText.textContent = "Player wins this round!";
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
    // playerChoice();
  }
};

let playerChoice = function (e) {
  // console.log();
  player = e.path[0].value;
  console.log(playChoice);
  playChoice.textContent = player;
  compChoice.textContent = computer;
  gameCheck();
};

rock.addEventListener("click", playerChoice);
paper.addEventListener("click", playerChoice);
scissors.addEventListener("click", playerChoice);

computerPlay();
// playerChoice();
// console.log(`computer chooses ${computer}`);
