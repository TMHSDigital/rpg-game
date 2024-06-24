let player = {
    hp: 100,
    gold: 0,
    experience: 0,
};

function log(message) {
    const logDiv = document.getElementById('log');
    logDiv.innerHTML += `<p>${message}</p>`;
    logDiv.scrollTop = logDiv.scrollHeight;
}

function explore() {
    const event = Math.random();
    if (event < 0.3) {
        player.gold += 10;
        log('You found 10 gold!');
    } else if (event < 0.6) {
        player.experience += 5;
        log('You gained 5 experience points!');
    } else {
        player.hp -= 10;
        log('You encountered a trap and lost 10 HP!');
    }
    updateStatus();
}

function fight() {
    const event = Math.random();
    if (event < 0.5) {
        player.hp -= 20;
        player.gold += 20;
        player.experience += 10;
        log('You fought a monster and won! You gained 20 gold and 10 experience points, but lost 20 HP.');
    } else {
        player.hp -= 30;
        log('You fought a monster and lost! You lost 30 HP.');
    }
    updateStatus();
}

function rest() {
    player.hp += 20;
    if (player.hp > 100) player.hp = 100;
    log('You rested and regained 20 HP.');
    updateStatus();
}

function updateStatus() {
    if (player.hp <= 0) {
        log('Game Over! You died.');
        document.getElementById('game').innerHTML = '<button onclick="restart()">Restart</button>';
    }
}

function restart() {
    player.hp = 100;
    player.gold = 0;
    player.experience = 0;
    document.getElementById('game').innerHTML = `
        <button onclick="explore()">Explore</button>
        <button onclick="fight()">Fight</button>
        <button onclick="rest()">Rest</button>
    `;
    document.getElementById('log').innerHTML = '';
    log('Game restarted!');
}
