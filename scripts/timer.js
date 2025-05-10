let timerInterval;        
let timeLeft = 25 * 60;  
let isPomodoro = true;    
let isPaused = false;     
let isRunning = false;    

function pomodoroTimer() {
    if (timerInterval) clearInterval(timerInterval);  

    isRunning = true;      
    isPaused = false;      

    timerInterval = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Pomodoro time is over! Now it's time to take a break!");
            document.getElementById("text").innerHTML = "Break!";
            isPomodoro = false;
            timeLeft = 5 * 60;  
            pomodoroTimer();   
            return;
        }
        updateDisplay();
        timeLeft--;  
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    isPomodoro = true;
    isPaused = false;
    isRunning = false;
    timeLeft = 25 * 60;
    document.getElementById("countDownTimer").innerHTML = "25:00";
    document.getElementById("text").innerHTML = "Pomodoro!";
    document.getElementById("startButton").innerHTML = "Start!";
}

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById("countDownTimer").innerHTML =
        minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');
}
