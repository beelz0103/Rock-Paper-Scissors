function computerPlay() {
    let cmselector = Math.floor(Math.random() * (4 - 1) + 1);
    if (cmselector === 1) {
        return "Rock";
    } else if (cmselector === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


function playRound (playerSelection, computerSelection) {
    if (computerSelection == "Rock" && playerSelection == "Rock") {
        return "Draw";
    }
}

const playerSelection = "Rock"
const computerSelection = computerPlay();

console.log(playRound (playerSelection, computerSelection));