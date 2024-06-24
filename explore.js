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
