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
