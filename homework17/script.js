let seconds = 0;
let tens = 0;
let appendSeconds = document.getElementById("seconds");
let  appendTens = document.getElementById("tens");
let buttonStart = document.getElementById("start");
let buttonStop = document.getElementById("stop");
let interval;

function startTimer() {
    tens++;
    if (tens < 9) {
        appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        appendTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        appendTens.innerHTML = "0" + tens;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
        appendSeconds.innerHTML =seconds;
    }


    buttonStart.onclick = function () {
        interval = setInterval(startTimer);
    };
    buttonStop.onclick = function () {
        clearInterval(interval);
    }
}
