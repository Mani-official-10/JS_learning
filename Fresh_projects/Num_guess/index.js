let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".resultPara");
// console.log(lowOrHigh);

let p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    let guess = parseInt(userInput.value);

    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter  a valid number");
  } else if (guess < 1) {
    alert("Please enter number bigger than 1");
  }
  if (guess > 100) {
    alert("Please enter number lower than 100");
  } else {
    prevGuess.push(guess);

    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over ! ,Random number was ${randomNumber}.`);
      endGame();
    } else {
      displayGuess(guess);
      CheckGuess(guess);
    }
  }
}
function CheckGuess(guess) {
  if (guess < randomNumber) {
    displayMessage(`your number is toooo Low`);
  } else if (guess > randomNumber) {
    displayMessage(`your number is toooo High`);
  } else if (guess === randomNumber) {
    displayMessage(`You Win ! you find the correct number ${guess}.`);
    endGame();
  }
}
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} ,`;

  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h3> ${message} </h3>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game !</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    guessSlot.innerHTML = "";
    lowOrHigh.innerHTML = `<h3></h3>`;
  });
}
