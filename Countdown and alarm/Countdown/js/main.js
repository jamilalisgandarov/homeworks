var hours = Number(prompt("Saati daxil edin"));
var minutes = Number(prompt("Deqiqeni daxil edin"));
var seconds = Number(prompt("Saniyeni daxil edin"));


var counter = setInterval(function() { countdown() }, 1000);

function countdown() {
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (seconds == 0 && minutes != 0) {
        minutes = minutes - 1;
        seconds = 59;
    } else if (minutes == 0 && seconds == 0 && hours != 0) {
        hours = hours - 1;
        minutes = 59;
        seconds = 59;
    } else if (hours == 0 && minutes == 0 && seconds == 1) {
        setTimeout(countdown, 1000);
        alert("YOUR TIME IS DONE");
        stopFunc();

    } else {
        seconds = seconds - 1;
    }

}

function stopFunc() {
    clearInterval(counter);
}
