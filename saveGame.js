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
