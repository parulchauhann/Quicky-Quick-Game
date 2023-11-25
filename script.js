let start = document.getElementById("start")

var audio = new Audio('assets/pop.wav');

start.onclick = () => {
    audio.play();
    setTimeout(function () {
        location.href = "./login.html"
    }, 300)
}