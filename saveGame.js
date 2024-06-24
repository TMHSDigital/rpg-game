function saveGame() {
    let gameState = {
        health: health,
        experience: experience,
        level: level,
        character: document.getElementById('character-name').textContent,
        strength: document.getElementById('strength').textContent,
        agility: document.getElementById('agility').textContent,
        intelligence: document.getElementById('intelligence').textContent,
        log: log.innerHTML
    };
    localStorage.setItem('rpgGameState', JSON.stringify(gameState));
    logMessage('Game saved!');
}
