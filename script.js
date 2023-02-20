
const randomInt = Math.floor (Math.random()*3);

const strings = ["rock", "paper", "scissors"];

const computerChoice = strings[randomInt];

console.log (computerChoice);

const playerChoice = document.getElementById("playerChoice").value;

console.log (playerChoice)

//document.getElementById("button").onclick=function () {
  //  if (document.getElementById("answer")=="rock", computerChoice=="rock"