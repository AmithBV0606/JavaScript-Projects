let randomNumber = Math.round(Math.random() * 100 + 1);
// console.log(randomNumber);
const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    // To make sure the value entered is in between 1 to 100.
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if(guess < 1){
        alert("Please enter a number greater than 1");
    } else if(guess > 100){
        alert("Please enter a number lesser than 100");
    } else {
        prevGuess.push(guess);
        if(numGuess === 10){
            guessStatusUpdate(guess);
            displayMessage(`Game Over. The actual number was ${randomNumber}`);
            endGame();
        } else {
            guessStatusUpdate(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    // To check how lower or higher the guessed number is, than the original number.
    if (guess === randomNumber) {
        displayMessage(`You guessed it right!!`);
        endGame();
    } else if(guess < randomNumber){
        displayMessage(`The number you've guessed is TOO low!!`);
    } else if (guess > randomNumber){
        displayMessage(`The number you've guessed is TOO high!!`);
    }
}

function guessStatusUpdate(guess) {
    // Displays the previous guesses and clears the input field.
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    // To displat all kinds of Messages.
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    // To end the game.
    userInput.value = '';
    userInput.setAttribute("disabled", "");
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    p.style.cursor = "pointer"
    startOver.appendChild(p);
    playGame = false;
    newGame();
    displayMessage('');
}

function newGame() {
    // To start a new game.
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', () => {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuesses = 1;
        guessSlot.innerHTML = ``;
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;
    })
}