let player;
let computer;

let computerPlay = function () {
  let randNum = Math.floor(Math.random() * 3);
  let plays = ["rock", "paper", "scissors"];
  computer = plays[randNum];
};
