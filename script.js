
function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);

    if (randomChoice === 0) {
        return "rock";
    } else if (randomChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice");
    return humanChoice ;
}

// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    console.log (`Human choice is: ${humanChoice}, Computer choice is: ${computerChoice}`)

    if(
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors")
    ) {
        humanScore++
        console.log (`You win! ${humanChoice} beats ${computerChoice}`)
    } else if (
        (computerChoice === "scissors" && humanChoice === "paper") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "rock" && humanChoice === "scissors")
    ) {
        computerScore++
        console.log (`You lose! ${computerChoice} beats ${humanChoice}`)
    } else {
        console.log("Draw!")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);