// create an integer variable for rounds played
let roundNumber = 1;

// create integer variables to track bot/user wins
let userWins = 0;
let botWins = 0;



// create function that generates RPS choice for bot 
    function getBotChoice() {
        let num = Math.random();
        let selection;

        if (num <= 0.33) {
            selection = "rock";
        } else if (num <= 0.66) {
            selection = "paper";
        } else { 
            selection = "scissors";
        }

        console.log("Bot generated: " + selection);
        return selection.toLowerCase();
    }

    


// create function that asks user for RPS choice
function getUserChoice() {
    let selection = prompt("Which hand will you play? (rock, paper or scissors)");
    console.log("User returned: " + selection);
    return selection.toLowerCase();
}



// compare user and bot choices, increment win and games-played variables
function playRound() {
    let userChoice = getUserChoice();
    let botChoice = getBotChoice();
    let gameState = userChoice + " vs " + botChoice;

    if (userChoice == botChoice) {
        console.log("Its a DRAW!")
    } else {
        switch (gameState) {
            case "rock vs scissors":
                userWins++;
                console.log("You smashed em! (WIN)");
                break;

            case "paper vs rock":
                userWins++;
                console.log("Its a wrap! (WIN)");
                break;

            case "scissors vs paper":
                userWins++;
                console.log("Cutting edge stratedgy! (WIN)");
                break;

            default:
                botWins++;
                console.log("You LOST!")
                break;

        }
    }
}



// play 5 rounds and announce the match results
    function playMatch() {
        while (roundNumber <= 5) {
            console.log("-----ROUND " + roundNumber + "-----")
            playRound();
            roundNumber++;
        }

        console.log("-----FINAL SCORE-----");
        console.log("User won: " + userWins);
        console.log("Bot won: " + botWins);

    }

playMatch();


// QUESTIONS / CONCERNS
// Q. how do i want to handle round ties? A. counts as a draw.
// Q. how do i want to handle match ties? A. match ties not possible
// Adjust round win/loss message to state current match score
// Warn players when they could be mathmatically eliminated and end match prematurely if so.