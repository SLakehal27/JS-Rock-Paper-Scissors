//Setup. Ideally, remove global variables.

let turnCount = 0;
const turnTxt = document.querySelector(".rpctxt p");
turnTxt.textContent = "Turn " + turnCount;
let playerWins = 0;
let computerWins = 0;

function getComputerChoice() 
{
    const states = ["Rock", "Paper", "Scissors"];
    const randomIndex = parseInt(Math.random() * 3);
    return states[randomIndex];
}
  
function determineWinner(moveA,moveB)
{
    if(moveA.toUpperCase() == "ROCK" && moveB == "Paper"){
        return false;
    }
    else if(moveA.toUpperCase() == "PAPER" && moveB == "Rock")
    {
       return true;
    }

    if(moveA.toUpperCase() == "SCISSORS" && moveB == "Paper"){
        return true;
    }
    else if(moveA.toUpperCase() == "PAPER" && moveB == "Scissors")
    {
        return false;
    }  
  
    if(moveA.toUpperCase() == "SCISSORS" && moveB == "Rock"){
        return false;
    }
    else if(moveA.toUpperCase() == "ROCK" && moveB == "Scissors"){
        return true;
    }
}

function fixName(playerChoice)
{
    if(playerChoice.toUpperCase() == "ROCK"){
        return 0;
    }
    else if(playerChoice.toUpperCase() == "PAPER"){
        return 1;
    }
    else
        return 2;
}

function playRound(playerChoice,computerChoice)
{
    const condition = ["win", "lose"];
    const gameStates = ["Rock", "Paper", "Scissors"];
    if(playerChoice.toUpperCase() == computerChoice.toUpperCase())
    {
        return "Stalemate!";
    }
    else
    {
        if(determineWinner(playerChoice,computerChoice))
        {
            playerChoice = gameStates[fixName(playerChoice)];
            playerWins++;
            return "You win! " + playerChoice + " beats " + computerChoice;
        }
        else
        {
            playerChoice = gameStates[fixName(playerChoice)];
            computerWins++;
            return "You lose! " + computerChoice + " beats " + playerChoice;
        }
    }
}


function playMove(move)
{
    const computerChoice = getComputerChoice();
    const result = playRound(move,computerChoice);
    const rpctxt = document.querySelector(".rpcrestxt p");

    if(turnCount >= 5)
    {
        rpctxt.textContent = "You won " + playerWins + " times and lost " + computerWins + " times";
        turnCount = 0;
        playerWins = 0;
        computerWins = 0;
        turnTxt.textContent = "Turn " + turnCount;
        return;
    }

    rpctxt.textContent = result;
    turnCount++;
    turnTxt.textContent = "Turn " + turnCount;
}

