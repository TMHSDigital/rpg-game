function fight() {
    let event = Math.random();
    if (event < 0.5) {
        let damage = Math.floor(Math.random() * 10) + 1;
        health -= damage;
        logMessage(`You got hit and lost ${damage} HP!`);
    } else {
        let exp = Math.floor(Math.random() * 20) + 10;
        experience += exp;
        logMessage(`You defeated an enemy and gained ${exp} experience points!`);
    }
    levelUp();
    updateBars();
}
