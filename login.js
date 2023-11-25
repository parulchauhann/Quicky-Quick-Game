const nextButton = document.getElementById("next_button")
const back = document.getElementById("back")
const home = document.getElementById("home")
const profile = document.getElementById("profile")
const inputBox = document.getElementsByClassName("input_box")
let source = document.getElementById('source')
const urlparams = new URLSearchParams(window.location.search)
let direct = urlparams.get('source')

var audio = new Audio('assets/pop.wav');

let form=document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    localStorage.setItem('storedName', form[1].value)
    audio.play();
    location.href="./instructions.html"
})

back.onclick = () => {
    audio.play();
    setTimeout(function () {
        audio.play();
        location.href = "./index.html"
    }, 300)
}

home.onclick = () => {
    setTimeout(function () {
        audio.play();
        location.href = `./index.html?source=${source.innerText}`
    }, 300)
}

profile.onclick = () => {
    setTimeout(function () {
        audio.play();
        location.href = `./profile.html?source=${source.innerText}`
    }, 300)
}

