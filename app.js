let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let drawCount = 0;

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
    if (string == null) {
        return `null`;
    }
    else {
    a = string.slice(0,1);
    b = a.toUpperCase();
    c = string.slice(1);
    d = c.toLowerCase();
    return b+d;
    }
}

function whowon (plScore, cpScore) {
    if (plScore > cpScore) {
        return `Game result: Player wins`;
    }

    else if (plScore == cpScore) {
        return `Game result: Draw`;
    }
    else {
        return `Game result: Computer wins`;
    }
}

function play() {
    console.log(`Start game`);
    console.log(`Inital score: Player ${playerScore} and Computer ${computerScore}`);
    i = 1;
    while (i < 6) {
        playerSelection = capitalize(prompt(`Choose your move: Rock, Paper, Scissors, press cancel or esc to exit`));

        if (playerSelection == `null`) {
        alert(`You have quit at round ${i}.`);
        break;
        }

        else if (playerSelection == `Rock` || playerSelection == `Paper` || playerSelection == `Scissors`) {
            computerSelection = computerPlay();
            console.log(`Match ${i} moves: PL${playerSelection} vs CP${computerSelection}`);
            let match = playRound(playerSelection, computerSelection);
            console.log(match);
            if (match == `CP wins`) {
                console.log(`Match ${i} result: Computer wins`)
                computerScore = computerScore + 1;
            }

            else if (match == `Player Wins`) {
                console.log(`Match ${i} result: Player wins`)
                playerScore = playerScore + 1;
            }

            else {drawCount = drawCount +1;}
            console.log(`Match ${i} score: Player ${playerScore} and Computer ${computerScore}`);
            i++;
        }
        
        else {
            alert(`Invalid Input`);
        }
        }    
    
    console.log(whowon(playerScore, computerScore))
    console.log(`Computer score: ${computerScore}`)
    console.log(`Player score: ${playerScore}`)
    console.log(`Draws: ${drawCount}`)
}

play();