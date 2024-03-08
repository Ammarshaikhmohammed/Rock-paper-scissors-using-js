const roundcount = 5;
const moves = ["paper", "rock", "scissors"];
const scores = [];
let roundIndex;


function game() {
    resetGame();
    handleUserInput();
};

!function greeting() {
    const instructions = `Welcome to Rock-Paper-Scissors game!
        Instructions:
        - Open the console and execute the following command: "game()".
        - Type ${moves.map(move => `"${move}"`).join(", ")} when prompted.
        - The computer will randomly select its move.
        - Let's see who wins!
    `;
    alert(instructions);
}();

function handleUserInput() {
    const userinput = prompt(`Round ${roundIndex + 1}: choose your next move: ${moves.join(", ")}`);
    if (userinput === null) {
        const choice = prompt(`To quit the game, type "yes" to confirm`)?.trim().toLowerCase();
        if (choice === "yes") {
            console.log("Game quitted");
        }
        else {
            handleUserInput();
        }
    }
    else {
        const usermove = userinput?.trim().toLowerCase();
        if (moves.includes(usermove)) {
            roundIndex++;
            console.log("Round " + roundIndex + ":");
            const pcmove = computerPlay();
            const isWinner = playRound(usermove, pcmove);
            if (isWinner !== undefined) {
                scores[isWinner ? 0 : 1]++;
            }
            if (roundIndex < roundcount) {
                console.log("Current Score: " + getScore());
                handleUserInput();
            }
            else {
                console.log("Final Scroe: " + getScore());
                const [playerpoint, pcpoint] = scores;
                let message;
                if (playerpoint === pcpoint) {
                    message = "Nobody won the game";
                }
                else {
                    message = `You ${playerpoint > pcpoint ? "won" : "lost"} the game`;
                }
                console.log("Game Ended - " + message);
            }
        }
        else {
            alert("Incorrect move, play again");
            handleUserInput();
        }
    }
}

function playRound(playerSelection, computerSelection) {
    console.log(`You: ${playerSelection} - Computer: ${computerSelection}`);
    let isWinner, message;
    if (playerSelection !== computerSelection) {
        const movei = moves.indexOf(playerSelection);
        const weakmove = moves[(movei + 1) % moves.length];
        isWinner = computerSelection === weakmove;
        message = `You ${isWinner ? "win" : "lose"}! `;
        if (isWinner) {
            message += playerSelection + " beats " + computerSelection;
        }
        else {
            isWinner = false;
            message += computerSelection + " beats " + playerSelection;
        }
    }
    else {
        message = "Draw, nobody wins this round";
    }
    console.log(message);
    return isWinner;
}

function computerPlay() {
    return moves[Math.floor(Math.random() * moves.length)];
}

function getScore() {
    return `You ${scores[0]}-${scores[1]} Computer`;
}

function resetGame() {
    console.clear();
    roundIndex = 0;
    scores[0] = scores[1] = 0;
};
game();