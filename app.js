let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

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

function whowon (plScore, cpScore) {
    if (plScore > cpScore) {
        return `Player wins`;
    }

    else if (plScore == cpScore) {
        return `Draw`;
    }
    else {
        return `Computer wins`;
    }
}

function play() {
    console.log(`Start game`);
    for (let i = 1; i <= 5; i++) {
        console.log(`Player ${playerScore} and Computer ${computerScore}`);
        console.log(`Round ${i} start:`);

        let z = 0;
        while (z<1) {
        playerSelection = prompt(`Choose your move: Rock, Paper, Scissors, press cancel or esc to exit`);

        if (playerSelection == null) {
        alert(`You have quit at round ${i}.`)
        alert(whowon(playerScore, computerScore));
        z++;
        break;
        }

        else {
        playerSelection = capitalize(playerSelection);
        if (playerSelection == `Rock` || playerSelection == `Paper` || playerSelection == `Scissors`) {
            computerSelection = computerPlay();
            console.log(`PL${playerSelection} vs CP${computerSelection}`);
            let match = playRound(playerSelection, computerSelection);
            console.log(match);
            z++;
        }
        
        else {
            alert(`Invalid Input`)
        }
        }
    }
    

    }
}