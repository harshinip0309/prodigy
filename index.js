// script.js
let timer;
let elapsedTime = 0;
let isRunning = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const laps = document.getElementById('laps');

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    const milliseconds = String(ms % 1000).padStart(3, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
}

function updateDisplay() {
    display.textContent = formatTime(elapsedTime);
}

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            elapsedTime += 10;
            updateDisplay();
        }, 10);
    }
}

function pauseStopwatch() {
    clearInterval(timer);
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(timer);
    elapsedTime = 0;
    updateDisplay();
    laps.innerHTML = '';
    isRunning = false;
}

function recordLap() {
    if (isRunning) {
        const lapTime = document.createElement('li');
        lapTime.textContent = formatTime(elapsedTime);
        laps.appendChild(lapTime);
    }
}

startBtn.addEventListener('click', startStopwatch);
pauseBtn.addEventListener('click', pauseStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
lapBtn.addEventListener('click', recordLap);
