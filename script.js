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

// logic to play the game (5 rounds)
    // declare player scores variables 
    // single round logic
        // write cases for player win
            // log the win message
            // increment player score
        // write cases for player loss
            // log the loss message
            // increment the computer score
        // write cases for tie 
            // log the tie message
    
    // play the 5 rounds
        // get human and computer choices
        // call single round
    
    // compare the scores and declare winner
        // player wins
        // computer wins
        // draw

// play the game (call the function)