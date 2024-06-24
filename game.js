let log = document.getElementById('log');
let healthBar = document.getElementById('health-bar');
let experienceBar = document.getElementById('experience-bar');

let health = 100;
let experience = 0;
let level = 1;

function logMessage(message) {
    let p = document.createElement('p');
    p.textContent = message;
    log.appendChild(p);
    log.scrollTop = log.scrollHeight;
}

function updateBars() {
    healthBar.style.width = health + '%';
    experienceBar.style.width = (experience % 100) + '%';
}

function explore() {
    let event = Math.random();
    if (event < 0.5) {
        let gold = Math.floor(Math.random() * 10) + 1;
        logMessage(`You found ${gold} gold!`);
    } else if (event < 0.8) {
        let exp = Math.floor(Math.random() * 10) + 1;
        experience += exp;
        logMessage(`You gained ${exp} experience points!`);
    } else {
        let damage = Math.floor(Math.random() * 10) + 1;
        health -= damage;
        logMessage(`You encountered a trap and lost ${damage} HP!`);
    }
    levelUp();
    updateBars();
}

function fight() {
    let event = Math.random();
    if (event < 0.5) {
        let damage = Math.floor(Math.random() * 10) + 1;
        health -= damage;
        logMessage(`You got hit and lost ${damage} HP!`);
    } else {
        let exp = Math.floor(Math.random() * 20) + 10;
        experience += exp;
        logMessage(`You defeated an enemy and gained ${exp} experience points!`);
    }
    levelUp();
    updateBars();
}

function rest() {
    let recovery = Math.floor(Math.random() * 10) + 1;
    health += recovery;
    if (health > 100) health = 100;
    logMessage(`You rested and recovered ${recovery} HP!`);
    updateBars();
}

function levelUp() {
    if (experience >= level * 100) {
        level++;
        experience = experience % 100;
        logMessage(`You leveled up! You are now level ${level}.`);
    }
}

updateBars();
