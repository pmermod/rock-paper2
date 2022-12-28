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
  // The playGame function gets the player's choice from button.id in the buttons.forEach function, gets the computer's choice using the getComputerChoice function, and calculates the result using the getResult function. It displays the result by adding textContent to the result element.

  const playGame = (playerChoice) => {
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);
    document.querySelector(
      "#result"
    ).textContent = `${result} You chose ${playerChoice}, the computer chose ${computerChoice}.`;
  };

  // All the buttons in the game screen are selected and event listeners are added to each. The forEach here does the heavy lifting. It triggers the playGame function and switches from game screen to result screen.

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
