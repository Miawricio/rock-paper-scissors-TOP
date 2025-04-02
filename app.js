function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;

    switch (choice){
        case 1: return "rock"

        case 2: return "paper"

        case 3: return "scissors"
    }

}


const playOptions = ["rock", "paper", "scissors"];

const userScoreCount = document.getElementById("user-score");
const compScoreCount = document.getElementById("computer-score");
const roundCount = document.getElementById("round-counter");
const resetBtn = document.getElementById("reset");
const resultDiv = document.querySelector(".results")

const rockButton = document.querySelector(".rock-btn");
const paperButton = document.querySelector(".paper-btn");
const scissorsButton = document.querySelector(".scissors-btn");

rockButton.addEventListener("click", rockChosen);
paperButton.addEventListener("click", paperChosen);
scissorsButton.addEventListener("click", scissorsChosen);



resetBtn.addEventListener("click", resetGame)

let userScore = 0;
let computerScore = 0;
let round = 0

function resetGame(){
  userScore = 0;
  computerScore = 0;
  round = 0;
  userScoreCount.innerHTML = `User: 0`;
  compScoreCount.innerHTML = `Computer: 0`;
  roundCount.innerHTML = 'Round: 0'
  compScoreCount.style.color = 'black';
  userScoreCount.style.color = 'black';

  rockButton.style.display = 'inline-block';
  paperButton.style.display = 'inline-block';
  scissorsButton.style.display = 'inline-block';
  
  resetBtn.style.visibility = 'hidden';
  
}

function gameTest(option){
  console.log(option)
}

function gameStart(option){
  let userGameChoice = option;
  
  let computerChoice = getComputerChoice();
  
    if (userGameChoice == computerChoice){
      alert("Tie!")
      round++;
      roundCount.innerHTML = `Round: ${round}`

      let newResult = document.createElement("p");
      newResult.textContent = `User choice: ${userGameChoice}, Computer choice: ${computerChoice}, It's a tie!`;
      resultDiv.appendChild(newResult);

    } else if((userGameChoice == "rock" && computerChoice == "paper" )|| 
    (userGameChoice == "paper" && computerChoice == "scissors" )|| 
    (userGameChoice == "scissors" && computerChoice == "rock")){
      alert("You lose :(");
      computerScore++;
      round++;
      roundCount.innerHTML = `Round: ${round}`
      compScoreCount.innerHTML = `Computer: ${computerScore}`

      let newResult = document.createElement("p");
      newResult.textContent = `User choice: ${userGameChoice}, Computer choice: ${computerChoice}, You lost :(`;
      resultDiv.appendChild(newResult);

      if(computerScore == 5){
        alert("You lost :(")
      userScore = 0;
      computerScore = 0;
      rockButton.style.display = 'none';
      paperButton.style.display = 'none';
      scissorsButton.style.display = 'none';
      
      userScoreCount.style.color = 'red';
      compScoreCount.style.color = 'green';
      
      resetBtn.style.visibility = 'visible'
      }


    } else if((userGameChoice == "rock" && computerChoice == "scissors") || 
    (userGameChoice == "paper" && computerChoice == "rock")|| 
    (userGameChoice == "scissors" && computerChoice == "paper")){
      alert("You win :)")
      userScore++;
      round++;
      roundCount.innerHTML = `Round: ${round}`
      userScoreCount.innerHTML = `User: ${userScore}`

      let newResult = document.createElement("p");
      newResult.textContent = `User choice: ${userGameChoice}, Computer choice: ${computerChoice}, You won!`;
      resultDiv.appendChild(newResult);

      if(userScore == 5){
        alert("You won, Congratulations!");
        userScore = 0;
        computerScore = 0;
        
        rockButton.style.display = 'none';
        paperButton.style.display = 'none';
        scissorsButton.style.display = 'none';
        
        userScoreCount.style.color = 'green';
        compScoreCount.style.color = 'red';
        
        resetBtn.style.visibility = 'visible'
      }

    } else {
      alert("Please, enter a valid option")
    }
  }


  function rockChosen(){
    let userChoice = playOptions[0];
  
    gameStart(userChoice);
  }

  function paperChosen(){
    let userChoice = playOptions[1];
  
    gameStart(userChoice);
  }

  function scissorsChosen(){
    let userChoice = playOptions[2];
  
    gameStart(userChoice);
  }