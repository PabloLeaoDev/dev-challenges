import { getBless, getBlessThree } from './bless-calculator/index.js';

function getBlessFront() {
    const itemName = document.getElementById('item-name').value;
    console.log(itemName);
    const blessLevel = parseInt(document.getElementById('bless-level').value, 10);
    const ignoredItems = document.getElementById('ignored-items').value.split(',').map(id => id.trim());

    const result = getBless(itemName, blessLevel, ignoredItems);
    document.getElementById('output').textContent = JSON.stringify(result, null, 2);
}

document.getElementById('run-getBless').addEventListener('click', getBlessFront);

document.getElementById('run-getBlessThree').addEventListener('click', () => {
    const itemName = document.getElementById('item-name').value;
    const blessLevel = parseInt(document.getElementById('bless-level').value, 10);
    const ignoredItems = document.getElementById('ignored-items').value.split(',').map(id => id.trim());

    const result = getBlessThree(itemName, blessLevel, ignoredItems);
    document.getElementById('output').textContent = JSON.stringify(result, null, 2);
});