//Setup. Ideally, remove global variables.

let turnCount = 0;
const turnTxt = document.querySelector(".rpctxt p");
turnTxt.textContent = "Turn " + turnCount;
let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
  const states = ["Rock", "Paper", "Scissors"];
  const randomIndex = parseInt(Math.random() * 3);
  return states[randomIndex];
}

function isWinningMove(moveA, moveB) {
  let isWinWithRock = moveA === "Rock" && moveB === "Scissors";
  let isWinWithPaper = moveA === "Paper" && moveB === "Rock";
  let isWinWithScissors = moveA === "Scissors" && moveB === "Paper";
  return isWinWithRock || isWinWithPaper || isWinWithScissors;
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Stalemate!";
  }
  if (isWinningMove(playerChoice, computerChoice)) {
    playerWins++;
    return "You win! " + playerChoice + " beats " + computerChoice;
  }
  playerChoice = gameStates[fixName(playerChoice)];
  computerWins++;
  return "You lose! " + computerChoice + " beats " + playerChoice;
}

function resetCounters() {
  turnCount = 0;
  playerWins = 0;
  computerWins = 0;
}

function playMove(move) {
  const computerChoice = getComputerChoice();
  const result = playRound(move, computerChoice);
  const rpctxt = document.querySelector(".rpcrestxt p");

  if (turnCount >= 5) {
    rpctxt.textContent =
      "You won " + playerWins + " times and lost " + computerWins + " times";
    resetCounters();
    turnTxt.textContent = "Turn " + turnCount;
    return;
  }

  rpctxt.textContent = result;
  turnCount++;
  turnTxt.textContent = "Turn " + turnCount;
}
