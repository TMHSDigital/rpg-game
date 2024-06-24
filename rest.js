function rest() {
    let recovery = Math.floor(Math.random() * 10) + 1;
    health += recovery;
    if (health > 100) health = 100;
    logMessage(`You rested and recovered ${recovery} HP!`);
    updateBars();
}
