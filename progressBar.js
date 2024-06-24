function updateProgressBars() {
    healthBar.style.width = health + '%';
    experienceBar.style.width = (experience / (level * 100)) * 100 + '%';
}
