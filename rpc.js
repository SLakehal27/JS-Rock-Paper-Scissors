function getComputerChoice() {
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
  
  function fixName(playerChoice){
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
          playerChoice = gameStates[fixName(playerChoice)]
          return "You win! " + playerChoice + " beats " + computerChoice;
      }
      else{
          playerChoice = gameStates[fixName(playerChoice)]
          return "You lose! " + computerChoice + " beats " + playerChoice;
      }
    }
  }
  
  function gameLoop(){
    let numberOfGames = 1;
    let playerWins = 0;
    let enemyWins = 0;
    let isRock = false;
    let isPaper = false; 
    let isScissors = false;
    let isNotStalemate = false; 
    let isWinner = false;

    while (numberOfGames < 6)
    {
        let computerChoice = getComputerChoice();
        const playerMove = prompt("Your Move!");
        isRock = playerMove.toUpperCase() != "ROCK"; 
        isPaper = playerMove.toUpperCase() != "PAPER"; 
        isScissors = playerMove.toUpperCase() != "SCISSORS";
        console.log(numberOfGames);
        if( (isPaper && isRock && isScissors) || playerMove == null)
        {
            continue;
        }
        else
        {
            isNotStalemate = playerMove.toUpperCase() != computerChoice.toUpperCase;
            isWinner = determineWinner(playerMove,computerChoice);

            if(isWinner && isNotStalemate) {
                playerWins++;
            }
            else if(isWinner == false && isNotStalemate)
            {
                enemyWins++;
            }
            console.log(playRound(playerMove,computerChoice));
            numberOfGames++;
        }
    }

    console.log("You won " + playerWins + " times and lost " + enemyWins + " times");
  }
  
  gameLoop();
  
  