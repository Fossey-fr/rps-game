// create integer variables to track bot/user wins
let userWins = 0;
let botWins = 0;

// init nodes
const btn = document.querySelectorAll("button");
const userChoiceDisplay = document.querySelector("#userChoice");
const botChoiceDisplay = document.querySelector("#botChoice");
const roundResultDisplay = document.querySelector("#roundResult");
const scoreDisplay = document.querySelector("#score");
const divider = document.querySelector("#divider");


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

// compare user and bot choices, increment one win variable
function playRound(rpsChoice) {
    let userChoice = rpsChoice;
    let botChoice = getBotChoice();
    let gameState = userChoice + " vs " + botChoice;

    if (userWins == 5 || botWins == 5) {
        userWins = 0;
        botWins = 0;
    };

    userChoiceDisplay.textContent = "User: " + userChoice;
    botChoiceDisplay.textContent = "Bot: " + botChoice;

    if (userChoice == botChoice) {
        roundResultDisplay.textContent = "DRAW";
    } else {
        switch (gameState) {
            case "rock vs scissors":
                userWins++;
                roundResultDisplay.textContent = "WIN";
                break;

            case "paper vs rock":
                userWins++;
                roundResultDisplay.textContent = "WIN";
                break;

            case "scissors vs paper":
                userWins++;
                roundResultDisplay.textContent = "WIN";
                break;

            default:
                botWins++;
                roundResultDisplay.textContent = "LOSE";
                break;

        }
    }
    divider.textContent = "--------------------------------";

    if (userWins == 5) {
        scoreDisplay.textContent = "USER WINS " + userWins + "-" + botWins;
    } else if (botWins == 5) {
        scoreDisplay.textContent = "BOT WINS " + botWins + "-" + userWins
    } else {
        scoreDisplay.textContent = "User score: " + userWins + " | Bot score: " + botWins;
    }
};

// play round when user makes selection
btn.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent.toLowerCase());
    });
});