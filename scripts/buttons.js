function buttonClicked() {
    const button = document.getElementById("startButton");

    if (!isRunning) {
        button.innerHTML = "Stop!";
        button.style.backgroundColor = "red";
        pomodoroTimer();  
    } else if (!isPaused) {

        clearInterval(timerInterval);
        isPaused = true;
        isRunning = false;
        button.innerHTML = "Resume!";
        button.style.backgroundColor = "#FFC107";  
    } else {

        button.innerHTML = "Stop!";
        button.style.backgroundColor = "red";
        pomodoroTimer();  
    }
}

function resetButtonClicked() {
    document.getElementById("startButton").innerHTML = "Start!";
    document.getElementById("startButton").style.backgroundColor = "#4CAF50";
    resetTimer();
}
