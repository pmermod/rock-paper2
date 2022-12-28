// This code creates a simple game where the player can click on one of the three buttons (rock, paper, or scissors) to make their selection, the computer having made a random selection. The result of the round (win, lose, or tie) is displayed to the player on a new screen.

(function () {
  const choices = ["rock", "paper", "scissors"];

  const getComputerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  /* This getResult function compares the choices made by the player and the computer against the possible winning combinations. It returns a string indicating the result of the game. 
  If the player and computer have the same choice, it returns "It's a tie!".
  If the player has won the game, it returns "You win!".
  If the player has lost the game, it returns "You lose!".
  */

  const getResult = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  };

  // The playGame function gets the player's choice from button.id in the buttons.forEach function, gets the computer's choice using the getComputerChoice function, and calculates the result using the getResult function. It displays the result by adding textContent to the result element.

  const playGame = (playerChoice) => {
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);
    document.querySelector(
      "#result"
    ).textContent = `${result} You chose ${playerChoice}, the computer chose ${computerChoice}.`;
  };

  // All the buttons in the game screen are selected and event listeners are added to each. The forEach triggers the playGame function and switches from game screen to result screen.

  const buttons = document.querySelectorAll("#game button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playGame(button.id);
      document.querySelector("#game").classList.add("hidden");
      document.querySelector("#result-screen").classList.remove("hidden");
    });
  });

  // The play-again button adds a click event listener that hides the result screen and displays the game screen by adding / removing the hidden class.

  document.querySelector("#play-again-button").addEventListener("click", () => {
    document.querySelector("#result-screen").classList.add("hidden");
    document.querySelector("#game").classList.remove("hidden");
  });
})();

/*
(function () {
  const choices = ["rock", "paper", "scissors"];

  const getComputerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const getResult = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  };

  const playGame = (playerChoice) => {
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);
    document.querySelector(
      "#result"
    ).textContent = `${result} You chose ${playerChoice}, the computer chose ${computerChoice}.`;
  };

  const buttons = document.querySelectorAll("#game button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playGame(button.id);
      document.querySelector("#game").classList.add("hidden");
      document.querySelector("#result-screen").classList.remove("hidden");
    });
  });

  document.querySelector("#play-again-button").addEventListener("click", () => {
    document.querySelector("#result-screen").classList.add("hidden");
    document.querySelector("#game").classList.remove("hidden");
  });
})();
*/
