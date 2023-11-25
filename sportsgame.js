const inputBoxes = document.querySelector("#input_boxes")
const nextButton = document.querySelector("#skip_button")
let hint = document.querySelector("#hint")
let userInput = document.querySelector("#user_input")
let tries = document.querySelector("#tries span")
let guesses = document.querySelector("#guesses span")
const back = document.getElementById("back")
const home = document.getElementById("home")
const profile = document.getElementById("profile")
let time = document.getElementById("time").textContent
let scoreBox = document.getElementById("scorelevel")
let source = document.getElementById('source')
const urlparams = new URLSearchParams(window.location.search)
let direct = urlparams.get('source')
var audio = new Audio('assets/pop.wav');
var gameover = new Audio('./assets/gameover.mp3');
var fullAudio = new Audio('./assets/fullAudio.mp3')

let word;
let turn;
let score = 0;
let count = 0;
let startTimer;
let totalGuesses;
let wrongLetters = [];
let d = [];
var wrongGuess = [];

back.onclick = () => {
    audio.play();
    location.href = "./categories.html"
}

home.onclick = () => {
    audio.play();
    location.href = `./index.html?source=${source.innerText}`
}

profile.onclick = () => {
    audio.play();
    location.href = `./profile.html?source=${source.innerText}`
}

// to get any random word from the sports list of game.js
function randomWord() {
    fullAudio.play();
    count = 0
    wrongGuess = []
    clearInterval(startTimer)
    time = 31
    startTimer = setInterval(function () {
        time--;
        document.getElementById("time").textContent = time;

        if (time < 2) {
            gameover.play();
            gameover.onended = function () {
                location.href = "./gameover.html?page=sports"
                randomWord();
            }
        }
    }, 1000);

    let randomSet = allSportsWords[Math.floor(Math.random() * allSportsWords.length)];
    turn = 0; // get a hint is displayed on the screen
    hintButton(randomSet.hint)

    word = randomSet.word;
    totalGuesses = 10;

    hint.onclick = () => {
        hintButton(randomSet.hint)
    }
    tries.innerText = "";

    // inputs the guesses numbers as 10
    guesses.innerText = totalGuesses;


    // to adjust the number of boxes according to the word's length
    let fill = "";
    for (let i = 0; i < word.length; i++) {
        fill += '<input type="text" class="box" disabled>';
    }
    inputBoxes.innerHTML = fill;
}
randomWord();

// use of onclick on skip button to skip to next question
nextButton.onclick = () => {
    audio.play();
    clearInterval(startTimer);
    randomWord();
}

// hintDesc stores the value of hint from the randomHint
function hintButton(hintDesc) {
    if (turn == 1) {
        hint.innerHTML = hintDesc;  // as the user clicked, it shows the hint
        turn = 0;
    }
    else {
        hint.innerHTML = `💡Get a hint`
        turn = 1;
    }
}

// function to store the input user enters through keyboard
function targetKeyboard(e) {
    let keyboardValue = e.target.value;

    // condition to check if user entered letter, not numbers
    if (word.toUpperCase().includes(keyboardValue.toUpperCase())) {

        // to enter the keyboardValue to the inputBoxes if the user's letter is in the word
        for (let i = 0; i < word.length; i++) {
            if (word[i].toUpperCase() === keyboardValue.toUpperCase()) {
                audio.play();
                inputBoxes.querySelectorAll("input")[i].value = keyboardValue
                count++
            }

        }
        // check if the length of cout is equal to word's length, and if it is, then increases the score
        if (count == word.length) {
            score += 10;
            localStorage.setItem('score', score) // to update the score if there's an increment
            scoreBox.innerText = score
            setTimeout(randomWord, 500) // to give a second break before going to next question
        }

    }
    else {
        totalGuesses--;
        // user cannot add same value twice 
        // it checks if the wrong word is already stored or not
        let arr = wrongGuess.find(function (item) {
            return item === keyboardValue
        })

        // if the wrong letter is not present, then it prints the value
        if (arr === undefined) {
            tries.innerHTML += `${keyboardValue} `
            wrongGuess.push(keyboardValue)
        }
    }
    
    guesses.innerText = totalGuesses; // updates the new value of the remaining guess after it's decrement

    userInput.value = "";  // makes userInput empty after user enters the value

    if (totalGuesses < 1) {
            randomWord();
    }

}

// makes it to be used on mobile, so if user clicks on box, keyboard will appear
inputBoxes.addEventListener("click", () => userInput.focus());

userInput.addEventListener("input", targetKeyboard);
// listens to the keydown event, keydown is called if a key is pressed on keyboard
document.addEventListener("keydown", () => userInput.focus());


