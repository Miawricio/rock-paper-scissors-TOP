function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;

    switch (choice){
        case 1: return "rock"

        case 2: return "paper"

        case 3: return "scissors"
    }

}

const userScoreCount = document.getElementById("user-score");
const compScoreCount = document.getElementById("computer-score");
const roundCount = document.getElementById("round-counter");
const goButton = document.getElementById("btn-go");
const resetBtn = document.getElementById("reset");

goButton.addEventListener("click", gameStart);
resetBtn.addEventListener("click", resetGame)

let userScore = 0;
let computerScore = 0;
let round = 0

function resetGame(){
  userScore = 0;
  computerScore = 0;
  roung = 0;
  userScoreCount.innerHTML = `User: 0`;
  compScoreCount.innerHTML = `Computer: 0`;
  roundCount.innerHTML = 'Round: 0'
  compScoreCount.style.color = 'black';
  userScoreCount.style.color = 'black';


  goButton.style.visibility = 'visible';
  resetBtn.style.visibility = 'hidden';


  
}

function gameStart(){
  let userGameChoice = document.getElementById("userChoice").value.toLowerCase();
  
  let computerChoice = getComputerChoice();
  
    if (userGameChoice == computerChoice){
      alert("Tie!")
      round++;
      roundCount.innerHTML = `Round: ${round}`

    } else if((userGameChoice == "rock" && computerChoice == "paper" )|| (userGameChoice == "paper" && computerChoice == "scissors" )|| (userGameChoice == "scissors" && computerChoice == "rock")){
      alert("You lose :(");
      computerScore++;
      round++;
      roundCount.innerHTML = `Round: ${round}`
      compScoreCount.innerHTML = `Computer: ${computerScore}`
      if(computerScore == 3){
        alert("You lost :(")
      userScore = 0;
      computerScore = 0;
      goButton.style.visibility = 'hidden';
      userScoreCount.style.color = 'red';
      compScoreCount.style.color = 'green';
      resetBtn.style.visibility = 'visible'
      }


    } else if((userGameChoice == "rock" && computerChoice == "scissors") || (userGameChoice == "paper" && computerChoice == "rock")|| (userGameChoice == "scissors" && computerChoice == "paper")){
      alert("You win :)")
      userScore++;
      round++;
      roundCount.innerHTML = `Round: ${round}`
      userScoreCount.innerHTML = `User: ${userScore}`
      if(userScore == 3){
        alert("You won, Congratulations!");
        userScore = 0;
        computerScore = 0;
        goButton.style.visibility = 'hidden';
        userScoreCount.style.color = 'green';
        compScoreCount.style.color = 'red';
        resetBtn.style.visibility = 'visible'
      }

    } else {
      alert("Please, enter a valid option")
    }
  }