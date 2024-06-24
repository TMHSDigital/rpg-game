let log = document.getElementById('log');
let healthBar = document.getElementById('health-bar');
let experienceBar = document.getElementById('experience-bar');
let characterName = 'Paint the Warrior';
let strength = 10;
let agility = 5;
let intelligence = 2;

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
    experienceBar.style.width = (experience / (level * 100)) * 100 + '%';
    document.getElementById('character-name').innerText = `Character: ${characterName}`;
    document.getElementById('strength').innerText = strength;
    document.getElementById('agility').innerText = agility;
    document.getElementById('intelligence').innerText = intelligence;
}

function explore() {
    let event = Math.random();
    if (event < 0.3) {
        let gold = Math.floor(Math.random() * 10) + 1;
        logMessage(`You found ${gold} gold!`);
        addItemToInventory({ name: 'Gold', amount: gold });
    } else if (event < 0.6) {
        let exp = Math.floor(Math.random() * 10) + 1;
        experience += exp;
        logMessage(`You gained ${exp} experience points!`);
        levelUp();
    } else {
        let damage = Math.floor(Math.random() * 10) + 1;
        health -= damage;
        logMessage(`You encountered a trap and lost ${damage} HP!`);
    }
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
        experience = experience % (level * 100);
        logMessage(`You leveled up! You are now level ${level}.`);
    }
}

function saveGame() {
    let gameState = {
        characterName,
        strength,
        agility,
        intelligence,
        health,
        experience,
        level,
        inventory
    };
    localStorage.setItem('rpgGameState', JSON.stringify(gameState));
    logMessage('Game saved successfully!');
}

function loadGame() {
    let gameState = JSON.parse(localStorage.getItem('rpgGameState'));
    if (gameState) {
        characterName = gameState.characterName;
        strength = gameState.strength;
        agility = gameState.agility;
        intelligence = gameState.intelligence;
        health = gameState.health;
        experience = gameState.experience;
        level = gameState.level;
        inventory = gameState.inventory;
        updateBars();
        displayInventory();
        logMessage('Game loaded successfully!');
    } else {
        logMessage('No saved game found!');
    }
}
