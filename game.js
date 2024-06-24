let log = document.getElementById('log');
let healthBar = document.getElementById('health-bar');
let experienceBar = document.getElementById('experience-bar');
let characterName = '';
let characterClass = '';
let health = 100;
let experience = 0;
let level = 1;
let strength = 0;
let agility = 0;
let intelligence = 0;
let inventory = [];

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

function selectClass(characterClassSelection) {
    characterName = document.getElementById('character-name').value || 'Hero';
    characterClass = characterClassSelection;
    if (characterClass === 'warrior') {
        strength = 10;
        agility = 5;
        intelligence = 2;
    } else if (characterClass === 'mage') {
        strength = 2;
        agility = 5;
        intelligence = 10;
    } else if (characterClass === 'rogue') {
        strength = 5;
        agility = 10;
        intelligence = 2;
    }
    document.getElementById('character-selection').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    document.getElementById('stats').style.display = 'block';
    document.getElementById('inventory').style.display = 'block';
    document.getElementById('health').style.display = 'block';
    document.getElementById('experience').style.display = 'block';
    updateStats();
    updateBars();
    logMessage(`Welcome, ${characterName} the ${characterClass}!`);
}

function updateStats() {
    document.getElementById('character').textContent = `${characterName} the ${characterClass}`;
    document.getElementById('strength').textContent = strength;
    document.getElementById('agility').textContent = agility;
    document.getElementById('intelligence').textContent = intelligence;
}

function explore() {
    let chance = Math.random();
    if (chance < 0.3) {
        let gold = Math.floor(Math.random() * 10) + 1;
        inventory.push(`Gold: ${gold}`);
        logMessage(`You found ${gold} gold!`);
    } else if (chance < 0.6) {
        let exp = Math.floor(Math.random() * 10) + 1;
        experience += exp;
        logMessage(`You gained ${exp} experience points!`);
    } else {
        let damage = Math.floor(Math.random() * 10) + 1;
        health -= damage;
        logMessage(`You encountered a trap and lost ${damage} HP!`);
    }
    updateBars();
    levelUp();
}

function fight() {
    let chance = Math.random();
    if (chance < 0.5) {
        let damage = Math.floor(Math.random() * 10) + 1;
        health -= damage;
        logMessage(`You got hit and lost ${damage} HP!`);
    } else {
        let exp = Math.floor(Math.random() * 20) + 10;
        experience += exp;
        logMessage(`You defeated an enemy and gained ${exp} experience points!`);
    }
    updateBars();
    levelUp();
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
