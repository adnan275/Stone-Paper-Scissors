let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const statusMessage = document.querySelector("#status-msg");
const playerScoreEl = document.querySelector("#player-points");
const computerScoreEl = document.querySelector("#computer-points");

function getComputerChoice() {
  const options = ["stone", "paper", "scissor"];
  return options[Math.floor(Math.random() * options.length)];
}

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();

  if (playerChoice === computerChoice) {
    statusMessage.innerText = "It's a tie! Try again.";
    statusMessage.style.backgroundColor = "darkblue";
    return;
  }

  const winConditions = { stone: "scissor", paper: "stone", scissor: "paper" };
  const playerWins = winConditions[playerChoice] === computerChoice;

  if (playerWins) {
    playerScore++;
    playerScoreEl.innerText = playerScore;
    statusMessage.innerText = `You win! ${playerChoice} beats ${computerChoice}.`;
    statusMessage.style.backgroundColor = "green";
  } else {
    computerScore++;
    computerScoreEl.innerText = computerScore;
    statusMessage.innerText = `You lost! ${computerChoice} beats ${playerChoice}.`;
    statusMessage.style.backgroundColor = "red";
  }
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    playGame(choice.id.replace("-choice", ""));
  });
});
