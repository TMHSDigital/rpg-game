function updateExperienceBar() {
    document.getElementById('experience-bar').style.width = `${(experience / (level * 100)) * 100}%`;
}
