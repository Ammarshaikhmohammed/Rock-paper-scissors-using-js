function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function startGame() {
    const instructions = "Welcome to Rock-Paper-Scissors game!\n"
        + "Instructions:\n"
        + "- Type 'rock', 'paper', or 'scissors' when prompted.\n"
        + "- The computer will randomly select its choice.\n"
        + "- Let's see who wins!\n";

    alert(instructions);

    let playerScore = 0;
    let computerScore = 0;

    for (let stage = 1; stage <= 5; stage++) {
        const playerChoice = prompt(`Stage ${stage}: Choose: rock, paper, or scissors`);
        
        if (playerChoice === null) {
            alert("I guess you changed your mind. Maybe next time!");
            return;
        }

        if (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') {
            alert("You didn't enter rock, paper, or scissors.");
            return;
        }

        const result = playGame(playerChoice);
        alert(`Stage ${stage} Result: ${result}`);

        if (result === "You win!") {
            playerScore++;
        } else if (result === "Computer wins!") {
            computerScore++;
        }
    }

    alert("Final Scores:\n"
        + `Player: ${playerScore} | Computer: ${computerScore}\n`
        + (playerScore > computerScore ? "Congratulations! You win the game!" :
          (computerScore > playerScore ? "Computer wins the game. Better luck next time!" :
          "It's a tie game!")));
}

startGame();
