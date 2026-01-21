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

        return selection.toLowerCase();
    }



// compare user and bot choices, increment win and games-played variables
function playRound(rpsChoice) {
    let userChoice = rpsChoice;
    let botChoice = getBotChoice();
    let gameState = userChoice + " vs " + botChoice;

    console.log("Human: " + userChoice);
    console.log("Robot: " + botChoice);

    if (userChoice == botChoice) {
        console.log("(DRAW)")
    } else {
        switch (gameState) {
            case "rock vs scissors":
                userWins++;
                console.log("(WIN)");
                break;

            case "paper vs rock":
                userWins++;
                console.log("(WIN)");
                break;

            case "scissors vs paper":
                userWins++;
                console.log("(WIN)");
                break;

            default:
                botWins++;
                console.log("(LOSE)")
                break;

        }
    }
}

const btn = document.querySelectorAll("button");

btn.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent.toLowerCase());
    });
});



