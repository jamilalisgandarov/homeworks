var hours = Number(prompt("Saati daxil edin"));
var minutes = Number(prompt("Deqiqeni daxil edin"));
var counter = setInterval(function() { countdown() }, 1000);
var audio = new Audio('alarm.mp3');

function countdown() {
    document.getElementById("alarmHours").innerHTML = hours + " :  ";
    document.getElementById("alarmMinutes").innerHTML = +minutes;
    var d = new Date();
    hoursNow = d.getHours();
    minutesNow = d.getMinutes();
    document.getElementById("hoursNow").innerHTML = hoursNow;
    document.getElementById("minutesNow").innerHTML = minutesNow;
    if (hours == hoursNow && minutes == minutesNow) {
        alert("IT IS TIME TO WAKE UP!!!");
        audio.play();
    }
}
