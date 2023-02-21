
// function getComputerChoice () {
  

let computerWins = 0;
  let playerWins = 0;

  console.log (playerWins);
console.log (computerWins);

for (let i = 0; i < 5; i++) {
  // your code here!

  const randomInt = Math.floor (Math.random()*3);

const strings = ["rock", "paper", "scissors"];

const computerChoice = strings[randomInt];

console.log (computerChoice);

// }

let playerChoice = window.prompt("choose your weapon");

console.log (playerChoice);




// function playRound () {

if (playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "paper" && computerChoice == "rock" || playerChoice == "scissors" && computerChoice == "paper") {
  document.write ("You win! The computer chose " +computerChoice);
  playerWins ++;
}

if (playerChoice == computerChoice ) {
  document.write ("You draw. The computer chose " +computerChoice ," as well.");
}

if (playerChoice == "rock" && computerChoice == "paper" || playerChoice == "paper" && computerChoice == "scissors" || playerChoice == "scissors" && computerChoice == "rock") {
  document.write ("You lose. The computer chose " +computerChoice);
  computerWins ++;
}

// }



}




//document.getElementById("button").onclick=function () {
  //  if (document.getElementById("answer")=="rock", computerChoice=="rock"