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

function play(playerMove) {    
    document.querySelector("#greeting").textContent = "";
    playerSelection = playerMove;
    computerSelection = computerPlay();
    hightlightCPmove(computerSelection);
    const match = playRound(playerSelection, computerSelection);        

    if (match == `computer wins`) {
    console.log(`Match result: Computer wins`)
    computerScore = computerScore + 1;
    document.querySelector('#scoreKeeperText').textContent = `${playerSelection} loses to ${computerSelection}, you lose.`;
    document.querySelector(".computerScore").textContent = `SCORE: ${computerScore}`;
    }

    else if (match == `player wins`) {
    console.log(`Match result: Player wins`)
    playerScore = playerScore + 1;
    document.querySelector('#scoreKeeperText').textContent = `${playerSelection} beats ${computerSelection}, you win.`;
    document.querySelector('.playerScore').textContent = `SCORE: ${playerScore}`;
    }

    else {
        drawCount = drawCount +1;
        document.querySelector('#scoreKeeperText').textContent = `${playerSelection} vs ${computerSelection}, draw.`;
    }

    if (playerScore == 5 || computerScore == 5) {
        document.querySelector('#playButtons').style.pointerEvents = "none";

        if (playerScore > computerScore) {
        document.querySelector('#announcePlayer').textContent = `You won the game. YAY! Refresh to play again.`;
        }

        else {
            document.querySelector('#announcePlayer').textContent = `You lost to a computer. Refresh to play again.`;
        }

    
        console.log(playerScore);
        console.log(computerScore);
    }


    
    console.log(`Computer score: ${computerScore}`)
    console.log(`Player score: ${playerScore}`)
    console.log(`Draws: ${drawCount}`)
}


tet1 = document.querySelectorAll('#cpButton img') 
tet2 = document.querySelectorAll('#playButton img')
console.log(tet1);
console.log(tet2);



tet2.forEach((value) => {    
    value.addEventListener('click', (e) => { 
        console.log(e.target);
        turnBack();
        turnBack2();
        e.target.style.backgroundColor = "lightyellow";
        console.log(e.target.id);
        play(e.target.id);
    }) 
});

function turnBack() {
    tet2.forEach((value) => {
        value.style.backgroundColor = "lightgray";
    })
}

function turnBack2() {
    tet1.forEach((value) => {
        value.style.backgroundColor = "lightgray";
    })
}

let compSel = computerPlay();
console.log(compSel)

function hightlightCPmove (compSel) {
    if (compSel === "Scissors") {
    document.querySelector("#cpScissors").style.backgroundColor = "lightblue";
    }

    else if(compSel === "Rock") {
    document.querySelector("#cpRock").style.backgroundColor = "lightblue";        
    }

    else {
    document.querySelector("#cpPaper").style.backgroundColor = "lightblue";      
    }
} 