let log = document.getElementById('log');

function logMessage(message) {
    let p = document.createElement('p');
    p.textContent = message;
    log.appendChild(p);
    log.scrollTop = log.scrollHeight;
}

function explore() {
    logMessage('You explore the surroundings.');
    // Add more exploration logic here
}

function fight() {
    logMessage('You engage in a fight!');
    // Add more fighting logic here
}

function rest() {
    logMessage('You take a rest and recover.');
    // Add more resting logic here
}
