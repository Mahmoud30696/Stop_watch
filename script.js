let isRunning = false;
let intervalId;
let elapsedTime = 0;

function updateDisplay() {
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;
    
    const displayString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('display').textContent = displayString;
}

document.getElementById('startStop').addEventListener('click', function () {
    if (isRunning) {
        clearInterval(intervalId);
        this.textContent = 'Start';
    } else {
        intervalId = setInterval(function () {
            elapsedTime++;
            updateDisplay();
        }, 1000);
        this.textContent = 'Stop';
    }
    isRunning = !isRunning;
});

document.getElementById('reset').addEventListener('click', function () {
    clearInterval(intervalId);
    elapsedTime = 0;
    updateDisplay();
    isRunning = false;
    document.getElementById('startStop').textContent = 'Start';
});

updateDisplay();
