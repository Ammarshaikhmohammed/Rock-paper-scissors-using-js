"use strict";

function playGame(playerChoice) {
  var choices = ['rock', 'paper', 'scissors'];
  var computerChoice = choices[Math.floor(Math.random() * 3)];

  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (playerChoice === 'rock' && computerChoice === 'scissors' || playerChoice === 'paper' && computerChoice === 'rock' || playerChoice === 'scissors' && computerChoice === 'paper') {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

function startGame() {
  var instructions = "Welcome to Rock-Paper-Scissors game!\n" + "Instructions:\n" + "- Type 'rock', 'paper', or 'scissors' when prompted.\n" + "- The computer will randomly select its choice.\n" + "- Let's see who wins!\n";
  alert(instructions);
  var playerScore = 0;
  var computerScore = 0;

  for (var stage = 1; stage <= 5; stage++) {
    var playerChoice = prompt("Stage ".concat(stage, ": Choose: rock, paper, or scissors"));
    var result = playGame(playerChoice);
    var stageResult = "Stage ".concat(stage, " Result: ").concat(result);
    alert(stageResult);

    if (result === "You win!") {
      playerScore++;
    } else if (result === "Computer wins!") {
      computerScore++;
    }
  }

  var finalScores = "Final Scores:\n" + "Player: ".concat(playerScore, " | Computer: ").concat(computerScore, "\n");
  var gameResult = '';

  if (playerScore > computerScore) {
    gameResult = "Congratulations! You win the game!";
  } else if (computerScore > playerScore) {
    gameResult = "Computer wins the game. Better luck next time!";
  } else {
    gameResult = "It's a tie game!";
  }

  alert(finalScores + gameResult);
}

startGame();