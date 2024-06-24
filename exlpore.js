function explore() {
    let outcome = Math.random();
    if (outcome < 0.5) {
        let gold = Math.floor(Math.random() * 10) + 1;
        logMessage(`You found ${gold} gold!`);
    } else {
        let exp = Math.floor(Math.random() * 10) + 1;
        experience += exp;
        logMessage(`You gained ${exp} experience points!`);
        levelUp();
    }
    updateBars();
}
