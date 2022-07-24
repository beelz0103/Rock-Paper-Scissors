let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let drawCount = 0;

const scoreKeeperText = document.querySelector('#scoreKeeperText');
const greeting = document.querySelector('#greeting');
const cpScoreText = document.querySelector('.computerScore');
const plScoreText = document.querySelector('.playerScore')
const announceResult = document.querySelector('#announceResult')
const revertCpColor = document.querySelectorAll('#cpButton img') 
const playerButtons = document.querySelectorAll('#playButton img')

function computerPlay() {
    let cmSelector = Math.floor(Math.random() * (4 - 1) + 1);
    if (cmSelector === 1) {
        return "Rock";
    } else if (cmSelector === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound (playerSelection, computerSelection) {    
    if (computerSelection == playerSelection) {
        return "draw";
    }

    else if (computerSelection == "Rock") {
    
        if (playerSelection == "Paper") {
            return "player wins";
        }

        else return "computer wins";    
    }

    else if (computerSelection == "Paper") {
    
        if (playerSelection == "Scissors") {
            return "player wins";
        }

        else return "computer wins";    
    }

    else if (computerSelection == "Scissors") {
    
        if (playerSelection == "Rock") {
            return "player wins";
        }

        else return "computer wins";    
    }
}

function playGame(playerMove) {    
    greeting.textContent = "";
    playerSelection = playerMove;
    computerSelection = computerPlay();
   
    hightlightCPmove(computerSelection);
    const match = playRound(playerSelection, computerSelection);        

    if (match == `computer wins`) {  
    computerScore = computerScore + 1;
    scoreKeeperText.textContent = `${playerSelection} loses to ${computerSelection}, you lose.`;
    cpScoreText.textContent = `SCORE: ${computerScore}`;
    }

    else if (match == `player wins`) { 
    playerScore = playerScore + 1;
    scoreKeeperText.textContent = `${playerSelection} beats ${computerSelection}, you win.`;
    plScoreText.textContent = `SCORE: ${playerScore}`;
    }

    else {
    drawCount = drawCount +1;
    scoreKeeperText.textContent = `${playerSelection} vs ${computerSelection}, draw.`;
    }

    if (playerScore == 5 || computerScore == 5) {
        document.querySelector('#playButtons').style.pointerEvents = "none";

        if (playerScore > computerScore) {
        announceResult.textContent = `You won the game. YAY! Refresh to play again.`;
        }
        
        else {
        announceResult.textContent = `You lost to a computer. Refresh to play again.`;
        }

    }
}

playerButtons.forEach((value) => {    
    value.addEventListener('click', (e) => { 
        revertPlayerColor();
        revertCPColor()
        e.target.style.backgroundColor = "#682e2e";
        playGame(e.target.id);
    }) 
});

function revertPlayerColor() {
    playerButtons.forEach((value) => {
        value.style.backgroundColor = "#4a4f57";
    })
}

function revertCPColor() {
    revertCpColor.forEach((value) => {
        value.style.backgroundColor = "#4a4f57";
    })
}

function hightlightCPmove (compSel) {
    if (compSel === "Scissors") {
    document.querySelector("#cpScissors").style.backgroundColor = "#1e3652";
    }

    else if(compSel === "Rock") {
    document.querySelector("#cpRock").style.backgroundColor = "#1e3652";        
    }

    else {
    document.querySelector("#cpPaper").style.backgroundColor = "#1e3652";      
    }
} 