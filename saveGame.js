function saveGame() {
    let gameState = {
        characterName,
        strength,
        agility,
        intelligence,
        health,
        experience,
        level
    };
    localStorage.setItem('rpgGameState', JSON.stringify(gameState));
    logMessage('Game saved successfully!');
}
