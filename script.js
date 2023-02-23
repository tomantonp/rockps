

//var playerChoice = document.getElementById("playerChoice").value;


// document.getElementById("playButton").onclick=function() {
// Attach click event listeners to the buttons

document.getElementById('rock').addEventListener('click', () => {
  playRound('rock'); // Call playRound function with player choice
});

document.getElementById('paper').addEventListener('click', () => {
  playRound('paper'); // Call playRound function with player choice
});

document.getElementById('scissors').addEventListener('click', () => {
  playRound('scissors'); // Call playRound function with player choice
});

// Define the playRound function
function playRound(playerChoice) {

  function getComputerChoice () {
    const randomInt = Math.floor (Math.random()*3);
  
    const strings = ["rock", "paper", "scissors"];
    
    const computerChoice = strings[randomInt];
  
    return computerChoice;
  
  }


if (playerChoice == "rock" && getComputerChoice == "scissors" || playerChoice == "paper" && getComputerChoice == "rock" || playerChoice == "scissors" && getComputerChoice == "paper") {
  document.write ("You win! The computer chose " +getComputerChoice);
  playerWins ++;
  
}

if (playerChoice == getComputerChoice ) {
  document.write ("You draw. The computer chose " +getComputerChoice ," as well.");
}

if (playerChoice == "rock" && getComputerChoice == "paper" || playerChoice == "paper" && getComputerChoice == "scissors" || playerChoice == "scissors" && getComputerChoice == "rock") {
  document.write ("You lose. The computer chose " +getComputerChoice);
  computerWins ++;
}

}






























getComputerChoice ();

document.getElementById("computerChoice").innerHTML=getComputerChoice;

// for (let i = 0; i < 5; i++) {
  // your code here!



// }
playerChoice = document.getElementById("playerChoice").value;
// let playerChoice = window.prompt("choose your weapon");

console.log (playerChoice);

var computerWins = 0;
var playerWins = 0;


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

document.write("Computer: " +computerWins);
document.write("Player: " +playerWins);


console.log (playerWins);
console.log (computerWins);

//}

//document.getElementById("cWins").innerHTM=computerWins;

//document.getElementById("pWins").innerHTML=playerWins;



//document.getElementById("button").onclick=function () {
  //  if (document.getElementById("answer")=="rock", computerChoice=="rock"