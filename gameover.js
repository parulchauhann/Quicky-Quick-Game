const home = document.getElementById("home")
const profile = document.getElementById("profile")
let finalScore = document.getElementById("score")
let playAgain = document.getElementById("playAgain")
let description = document.getElementById("descScore")
var audio = new Audio('assets/pop.wav');

// use of URL to store the previous page location 
const urlparams = new URLSearchParams(window.location.search)
let direct = urlparams.get('page')

// takes the source for previous page
let source = document.getElementById('source')
let directed = urlparams.get('source')

home.onclick = () => {
    audio.play();
    location.href = `./index.html?source=${source.innerText}`
}

profile.onclick = () => {
    audio.play();
    location.href = `./profile.html?source=${source.innerText}`
}

playAgain.onclick = () => {
    if (direct == 'food') {
        audio.play();
        location.href = './foodgame.html'
    }
    else if (direct == 'sports') {
        audio.play();
        location.href = "./sportsgame.html"
    }
    else if (direct == 'personality') {
        audio.play();
        location.href = "./personalitiesgame.html"
    }
    else {
        audio.play();
        location.href = "./programminggame.html"
    }
}

var score = localStorage.getItem('score')
finalScore.textContent = score;

// array to store different phrases to appreciate the player
function descScore() {
    let descPhrase = ["Hats off to you! truly commendable 👏", "WOW! Your solving skills are worthy of phrase 😄 ", "Amazing! You are doing great 😊 ", "Good Job! Keep doing better 🤝 ", "Hey there! Wanna play again 🔤 "]
    let index = getRandomScore(0, descPhrase.length)
    description.innerText = descPhrase[index]
}

// getting any random phrase from the above array
function getRandomScore(min, max) {
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
}

descScore();