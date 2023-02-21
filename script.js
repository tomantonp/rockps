
const randomInt = Math.floor (Math.random()*3);

const strings = ["rock", "paper", "scissors"];

const computerChoice = strings[randomInt];

console.log (computerChoice);

let one = window.prompt("choose your weapon");

console.log (one);

if (one == "rock" && computerChoice == "scissors" || one == "paper" && computerChoice == "rock" || one == "scissors" && computerChoice == "paper") {
  document.write ("You win! The computer chose " +computerChoice);
}

if (one == computerChoice ) {
  document.write ("You draw. The computer chose " +computerChoice ," as well.");
}

if (one == "rock" && computerChoice == "paper" || one == "paper" && computerChoice == "scissors" || one == "scissors" && computerChoice == "rock") {
  document.write ("You lose. The computer chose " +computerChoice);
}

//document.getElementById("button").onclick=function () {
  //  if (document.getElementById("answer")=="rock", computerChoice=="rock"