/*
Name: Cayden Williams
File: script.js
*/

function addTask() {

    let input = document.getElementById("taskInput");
    let list = document.getElementById("taskList");

    let li = document.createElement("li");

    li.textContent = input.value;

    list.appendChild(li);

    input.value = "";
}

let timeLeft = 1500;

function startTimer() {

    let timerDisplay = document.getElementById("timer");

    let countdown = setInterval(function () {

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        timerDisplay.textContent = minutes + ":" + seconds;

        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(countdown);
            alert("Study session complete!");
        }

    }, 1000);
}
