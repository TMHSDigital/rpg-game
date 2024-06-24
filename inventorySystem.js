let inventory = {
    gold: 0,
};

function updateInventory() {
    document.getElementById('inventory').innerText = `Gold: ${inventory.gold}`;
}
