function updateProgressBars() {
    document.getElementById('health-bar').style.width = `${health}%`;
    document.getElementById('experience-bar').style.width = `${(experience / (level * 100)) * 100}%`;
}
