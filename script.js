
function playGame() {
const isRock = "rock"
const isPaper = "paper"
const isScissors = "scissors"
let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
   const choice = Math.random();
    if (choice <= 0.33) {
     computerChoice = isRock
 } else if (choice <= 0.66) {
     computerChoice = isPaper
 } else {
     computerChoice = isScissors
 }
}


const getHumanChoice = () => {
    const userInput = prompt('Enter your input: rock/paper/scissors');
    if (userInput === null) {
        console.log("You cancelled it bruhh");
        return null;
    }    
    const input = userInput.toLowerCase();
    if (![isRock, isPaper, isScissors].includes(input)) {
        console.log("Sheesh dawg, Enter a valid input");
       return null;
    } 
    return input
}

const playRound = () => {
    getComputerChoice();
    humanChoice = getHumanChoice();

    if (!humanChoice) return;

    if (humanChoice === isRock && computerChoice === isPaper) {
        computerScore++
    } else if (humanChoice === isRock && computerChoice === isScissors) {
        humanScore++
    } else if (humanChoice === isPaper && computerChoice === isRock) {
        humanScore++
    } else if (humanChoice === isPaper && computerChoice === isScissors) {
        computerScore++
    } else if (humanChoice === isScissors && computerChoice === isRock) {
        computerScore++
    } else if (humanChoice === isScissors && computerChoice === isPaper) {
        humanScore++
    } else if (humanChoice === computerChoice) {
    }
}

for (let i=0; i<5; i++) {
    playRound();
}

if (humanScore > computerScore) {
    console.log('You Win Bruh!!!!')
} else if (computerScore > humanScore) {
    console.log('Damn, Computer got you Bruh!!!')
} else {
    console.log('It\'s a Draw Bruh')
}

}
playGame();

