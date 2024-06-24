let inventory = {
    armor: null,
    weapon: null,
    gold: 0,
    items: [],
};

const armors = {
    warrior: [
        { name: "Leather Armor", hp: 10, agility: 5 },
        { name: "Chainmail", hp: 20, defense: 10, agility: -2 },
        { name: "Plate Armor", hp: 50, defense: 20, agility: -5 },
    ],
    mage: [
        { name: "Cloth Robe", magic: 5, agility: 5 },
        { name: "Enchanted Robe", magic: 10, defense: 10 },
        { name: "Mystic Robe", magic: 20, defense: 10, intelligence: 5 },
    ],
    rogue: [
        { name: "Light Armor", agility: 10, defense: 5 },
        { name: "Shadow Armor", agility: 20, defense: 10, stealth: 5 },
        { name: "Assassin's Armor", agility: 30, defense: 15, stealth: 10 },
    ],
};

const weapons = {
    warrior: [
        { name: "Short Sword", attack: 10, agility: 5 },
        { name: "Long Sword", attack: 20, defense: 10, agility: -2 },
        { name: "Great Axe", attack: 30, defense: 20, agility: -5 },
    ],
    mage: [
        { name: "Wand", magic: 10, agility: 5 },
        { name: "Staff", magic: 20, defense: 10 },
        { name: "Orb", magic: 30, defense: 10, intelligence: 5 },
    ],
    rogue: [
        { name: "Dagger", attack: 10, agility: 10 },
        { name: "Short Bow", attack: 20, agility: 10 },
        { name: "Crossbow", attack: 30, agility: 15, defense: -5 },
    ],
};

function equipArmor(armor) {
    inventory.armor = armor;
    displayInventory();
}

function equipWeapon(weapon) {
    inventory.weapon = weapon;
    displayInventory();
}

function addItemToInventory(item) {
    inventory.items.push(item);
    displayInventory();
}

function displayInventory() {
    let inventoryList = document.getElementById('inventory-list');
    inventoryList.innerHTML = '';

    if (inventory.armor) {
        let armorItem = document.createElement('li');
        armorItem.textContent = `Armor: ${inventory.armor.name}`;
        inventoryList.appendChild(armorItem);
    }

    if (inventory.weapon) {
        let weaponItem = document.createElement('li');
        weaponItem.textContent = `Weapon: ${inventory.weapon.name}`;
        inventoryList.appendChild(weaponItem);
    }

    inventory.items.forEach(item => {
        let listItem = document.createElement('li');
        listItem.textContent = item.name;
        inventoryList.appendChild(listItem);
    });
}

// Initial display of the inventory
displayInventory();
