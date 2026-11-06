function getComputerChoice() {
    // get random number between 1 to 3
    const num = Math.floor(Math.random() * (3)) + 1;
    // return rock/paper/scissors based on the random number
    switch (num) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            console.log("error in computer choice");
    }
}

// write getHumanChoice() function
function getHumanChoice() {
    // get user input using prompt()
    // clean the user input
    const userInput = prompt("Enter your choice!").trim().toLowerCase();
    // return the choice
    return userInput;
}

function playGame() {
    // declare player scores variables
    let humanScore = 0;
    let computerScore = 0;
 
    function playRound(humanChoice, computerChoice) {
        // write cases for player win
        if (
            (humanChoice === "rock" && computerChoice === "scissors") || 
            (humanChoice === "paper" && computerChoice === "rock") || 
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            // log the win message
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            // increment player score
            humanScore++;
            console.log(`Score: ${humanScore} - ${computerScore}`);
            console.log("");
        }
        // write cases for player loss
        else if (
            (humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "rock")
        ) {
            // log the loss message
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            // increment the computer score
            computerScore++;
            console.log(`Score: ${humanScore} - ${computerScore}`);
            console.log("");
        }
        // write cases for tie 
        else if (humanChoice === computerChoice) {
            // log the tie message
            console.log(`It is a tie! ${humanChoice} against ${computerChoice}`);
            console.log(`Score: ${humanScore} - ${computerScore}`);
            console.log("");
        }
    }
    
    // play the 5 rounds
    for (let i = 0; i < 5; i++) {
        // get human and computer choices
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        // call single round
        playRound(humanChoice, computerChoice);
    }   
    
    // compare the scores and declare winner
    // player wins
    if (humanScore > computerScore) {
        console.log(`You Win!! ${humanScore} - ${computerScore}`);
    }
    // computer wins
    else if (computerScore > humanScore) {
        console.log(`You Lose!! ${humanScore} - ${computerScore}`);
    }
    // draw
    else {
        console.log(`Draw!! ${humanScore} - ${computerScore}`);
    }
}
    

// play the game (call the function)
playGame();