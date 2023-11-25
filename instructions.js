const back = document.getElementById("back")
const home = document.getElementById("home")
const profile = document.getElementById("profile")
const nextButton = document.getElementById("next_button")
let name = localStorage.getItem('storedName')
let nameBox = document.getElementById('name')
let source = document.getElementById('source')
const urlparams = new URLSearchParams(window.location.search)
let direct = urlparams.get('source')

var audio = new Audio('assets/pop.wav');

nameBox.innerHTML = `Hey ${name} , Welcome to the game! Please go through the instructions of the game.`

back.onclick = () => {
    setInterval(function () {
        audio.play();
        location.href = "./login.html"
    }, 300)
}

home.onclick = () => {
    setInterval(function () {
        audio.play();
        location.href = `./index.html?source=${source.innerText}`
    }, 300)
}

profile.onclick = () => {
    setInterval(function () {
        audio.play();
        location.href = `./profile.html?source=${source.innerText}`
    }, 300)
}

nextButton.onclick = () => {
    setInterval(function () {
        audio.play();
        location.href = "./categories.html"
    }, 300)
}