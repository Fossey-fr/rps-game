// create an integer variable for rounds played
let roundsPlayed;
// create an integer variable for rounds won
let roundsWon;




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

        return selection;
    }

    console.log(getBotChoice());


// create function that asks user for RPS choice
function getUserChoice() {
    return prompt("Which hand will you play? (rock, paper or scissors)");
}

console.log(getUserChoice());

// if user and bot choices are identical, restart round

// compare user and bot choices to determine round winner

// create and/or increment rounds-won as an integer variable

// increment games played variable

// start a new round

// announce winner after 5 rounds



// QUESTIONS
// Q. how do i want to handle round ties? A. restart round
// Q. how do i want to handle match ties? A. match ties not possible