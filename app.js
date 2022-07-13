let player;
let computer;

let computerPlay = function () {
  let randNum = Math.floor(Math.random() * 3);
  let plays = ["rock", "paper", "scissors"];
  computer = plays[randNum];
};

let playerChoice = function () {
  player = prompt("Select Rock, Paper or Scissors");
  console.log(`Player chooses ${player}`);
  gameCheck();
};

computerPlay();
playerChoice();
console.log(`computer chooses ${computer}`);
