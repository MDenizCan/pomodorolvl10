const start = document.getElementById("startButton");
const pause = document.getElementById("pauseButton");
const reset = document.getElementById("resetButton");
const timerDisplay = document.getElementById("countDownTimer");
const alarmSound = new Audio("/sounds/alarmSound.mp3");



let timeLeft = 1500; // 25 minutes in seconds
let interval = null;

const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerDisplay.innerHTML =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const startTimer = () => {
    if (interval) return;
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft === 0) {
            clearInterval(interval);
            interval = null;
            alarmSound.play();
            alert("Time's up!");
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000);
};

const pauseTimer = () => {
    clearInterval(interval);
    interval = null;
};

const resetTimer = () => {
    clearInterval(interval);
    interval = null;
    timeLeft = 1500;
    updateTimer();
};

// Butonlara event listener bağla
if (start) start.addEventListener("click", startTimer);
if (pause) pause.addEventListener("click", pauseTimer);
if (reset) reset.addEventListener("click", resetTimer);


updateTimer(); 
