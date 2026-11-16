
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

console.log(getHumanChoice());