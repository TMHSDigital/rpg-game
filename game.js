let log = document.getElementById('log');
let healthBar = document.getElementById('health-bar');
let experienceBar = document.getElementById('experience-bar');
let characterName = document.getElementById('character-name');
let strength = document.getElementById('strength');
let agility = document.getElementById('agility');
let intelligence = document.getElementById('intelligence');

let health = 100;
let experience = 0;
let level = 1;
let gold = 0;

function logMessage(message) {
    let p = document.createElement('p');
    p.textContent = message;
    log.appendChild(p);
    log.scrollTop = log.scrollHeight;
}

function updateBars() {
    healthBar.style.width = health + '%';
    experienceBar.style.width = (experience / (level * 100)) * 100 + '%';
}

function explore() {
    let outcome = Math.random();
    if (outcome < 0.5) {
        let goldFound = Math.floor(Math.random() * 10) + 1;
        gold += goldFound;
        logMessage(`You found ${goldFound} gold!`);
    } else {
        let expGained = Math.floor(Math.random() * 10) + 1;
        experience += expGained;
        logMessage(`You gained ${expGained} experience points!`);
    }
    levelUp();
    updateBars();
}

function fight() {
    let outcome = Math.random();
    if (outcome < 0.5) {
        let damage = Math.floor(Math.random() * 10) + 1;
        health -= damage;
        logMessage(`You got hit and lost ${damage} HP!`);
    } else {
        let expGained = Math.floor(Math.random() * 20) + 10;
        experience += expGained;
        logMessage(`You defeated an enemy and gained ${expGained} experience points!`);
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
        experience = experience % (level * 100);
        logMessage(`You leveled up! You are now level ${level}.`);
    }
}

function saveGame() {
    let gameState = {
        health: health,
        experience: experience,
        level: level,
        gold: gold,
        log: log.innerHTML
    };
    localStorage.setItem('rpgGameSave', JSON.stringify(gameState));
    logMessage('Game saved!');
}

function loadGame() {
    let savedState = localStorage.getItem('rpgGameSave');
    if (savedState) {
        let gameState = JSON.parse(savedState);
        health = gameState.health;
        experience = gameState.experience;
        level = gameState.level;
        gold = gameState.gold;
        log.innerHTML = gameState.log;
        updateBars();
        logMessage('Game loaded!');
    } else {
        logMessage('No saved game found.');
    }
}

updateBars();
