const back = document.getElementById("back")
const home = document.getElementById("home")
let source = document.getElementById('source')
const urlparams = new URLSearchParams(window.location.search)
let direct = urlparams.get('source')
var audio = new Audio('assets/pop.wav');

home.onclick = () => {
    audio.play();
    location.href = "./index.html"
}

back.onclick = () => {
    audio.play();
    location.href = `${direct}.html?source=${source.innerText}`
}

home.onclick = () => {
    audio.play();
    location.href = `./index.html?source=${source.innerText}`
}