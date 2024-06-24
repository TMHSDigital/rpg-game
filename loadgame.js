function loadGame() {
    let gameState = JSON.parse(localStorage.getItem('rpgGameState'));
    if (gameState) {
        health = gameState.health;
        experience = gameState.experience;
        level = gameState.level;
        document.getElementById('character-name').textContent = gameState.character;
        document.getElementById('strength').textContent = gameState.strength;
        document.getElementById('agility').textContent = gameState.agility;
        document.getElementById('intelligence').textContent = gameState.intelligence;
        log.innerHTML = gameState.log;
        updateBars();
        logMessage('Game loaded!');
    } else {
        logMessage('No saved game found!');
    }
}
