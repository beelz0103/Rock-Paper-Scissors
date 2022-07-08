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
    if (computerSelection == playerSelection)
        return "Draw";

    else if (computerSelection == "Rock") {
    
        if (playerSelection == "Paper") {
            return "Player Wins";
        }

        else return "CP wins";    
    }

    else if (computerSelection == "Paper") {
    
        if (playerSelection == "Scissors") {
            return "Player Wins";
        }

        else return "CP wins";    
    }

    else if (computerSelection == "Scissors") {
    
        if (playerSelection == "Rock") {
            return "Player Wins";
        }

        else return "CP wins";    
    }

    }

let playerSelection = "Scissors";

let computerSelection = computerPlay();

console.log(`CP_${computerSelection} vs PY_${playerSelection}`);

console.log(playRound (playerSelection, computerSelection));

playerSelection = "Rock";

computerSelection = computerPlay();

console.log(`CP_${computerSelection} vs PY_${playerSelection}`);

console.log(playRound (playerSelection, computerSelection));

playerSelection = "Paper";

computerSelection = computerPlay();

console.log(`CP_${computerSelection} vs PY_${playerSelection}`);

console.log(playRound (playerSelection, computerSelection));