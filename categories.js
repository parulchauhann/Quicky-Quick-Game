const back = document.getElementById("back")
const home = document.getElementById("home")
const profile = document.getElementById("profile")
const food = document.getElementById("food")
const sports = document.getElementById("sports")
const personalities = document.getElementById("personalities")
const programming = document.getElementById("programming")
let source = document.getElementById('source')
const urlparams = new URLSearchParams(window.location.search)
let direct = urlparams.get('source')

var audio = new Audio('assets/pop.wav');

// to go back to the previous page
back.onclick = () => {
    setTimeout(function () {
        audio.play();
        location.href = "./instructions.html"
    }, 300)
}

// redirect user to the home page
home.onclick = () => {
    setTimeout(function () {
        audio.play();
        location.href = `./index.html?source=${source.innerText}`
    }, 300)
}

// redirect to the profile page
profile.onclick = () => {
    setTimeout(function () {
        audio.play();
        location.href = `./profile.html?source=${source.innerText}`
    }, 300)
}

// when users clicks on any type they are redirected to the game page
food.onclick = () => {
    setTimeout(function () {
        audio.play();
        location.href = "./foodgame.html"
    }, 300)
}

sports.onclick = () => {
    setTimeout(function () {
        audio.play();
        location.href = "./sportsgame.html"
    }, 300)
}

personalities.onclick = () => {
    setTimeout(function () {
        audio.play();
        location.href = "./personalitiesgame.html"
    }, 300)
}

programming.onclick = () => {
    setTimeout(function () {
        audio.play();
        location.href = "./programminggame.html"
    }, 300)
}


