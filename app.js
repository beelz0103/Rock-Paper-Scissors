let playerSelection;
let computerSelection;

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

    if (computerSelection == playerSelection) {
        return "Draw";
    }

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

function capitalize(string) {
    a = string.slice(0,1);
    b = a.toUpperCase();
    c = string.slice(1);
    d = c.toLowerCase();
    return b+d;
}

function play() {
    for (let i = 1; i <= 1; i++) {
        console.log(`Round ${i} start:`);
        playerSelection = capitalize(prompt(`Choose your move: Rock, Paper, Scissors`));
        computerSelection = computerPlay();
        console.log(`PL${playerSelection} vs CP${computerSelection}, ${playRound(playerSelection, computerSelection)}`);
    }
}