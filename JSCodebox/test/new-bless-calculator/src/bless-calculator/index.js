import items from '../kakele-data/items.json' with { type: 'json' };
import { cloneObj, findItems } from '../utils/utility';

export function getBless(itemName, blessValue, ignoredItems) {
  const itemCount = {
    warlordGold: 0,
    goldValues: [],
    inventory: {},
  };

  // this function create children items
  function getBlessItems(targetItem, blessValue) {
    if (blessValue <= 0 || targetItem.bless === 0) {
      return [];
    }

    const blessItems = items.filter(
      (item) =>
        item.rarity === targetItem.rarity &&
        item.level >= Math.floor(targetItem.level / 2) &&
        item.slot === targetItem.slot &&
        !ignoredItems.includes(item.id.toString())
    );

    if (blessItems.length === 0) {
      return [targetItem];
    }

    if (!itemCount.inventory[targetItem.name]) {
      itemCount.inventory[targetItem.name] = {
        count: 1,
      };
    } else {
      itemCount.inventory[targetItem.name].count++;
    }

    if (targetItem.rarity !== 'Legendary') {
      targetItem.gold = targetItem.level * 10_000 * (blessValue > 1 ? blessValue - 1 : 1);
    } else {
      targetItem.gold = 100_000_000 * blessValue;
    }

    itemCount.goldValues.push(targetItem);

    const sortedItems = blessItems.sort((a, b) => a.level - b.level || a.value - b.value);

    console.log(sortedItems);

    const result = Array.from({ length: blessValue }, (_, i) => {
      const clone = cloneObj(sortedItems[0]);

      clone.bless = i;
      clone.currentBless = i;

      clone.children = getBlessItems(clone, i);
      return clone;
    });

    return result;
  }

  const targetItem = items.find((item) => item.name === itemName);

  if (targetItem.rarity === 'Legendary') {
    for (let index = 0; index < blessValue; index++) {
      // if (index === 0) {
      //   itemCount.warlordGold += 100_000_000;
      // } else {
      //   itemCount.warlordGold += itemCount.warlordGold;
      // }
      itemCount.warlordGold += 100_000_000;
    }

    const sacrificialItem = findItems(targetItem, ignoredItems);

    sacrificialItem.bless = blessValue;
    getBlessItems(sacrificialItem, blessValue);
    itemCount.inventory = Object.fromEntries(
      Object.entries(itemCount.inventory).sort((a, b) => b[1].count - a[1].count)
    );
  } else {
    getBlessItems(targetItem, blessValue + 1);

    if (itemCount.inventory[targetItem.name].count > 1) {
      itemCount.inventory[targetItem.name].count -= 1;
    } else {
      delete itemCount.inventory[targetItem.name];
    }
  }

  // if (targetItem.rarity === 'Legendary') {
  //   itemCount.inventory = Object.fromEntries(
  //     Object.entries(itemCount.inventory).sort((a, b) => b[1].count - a[1].count)
  //   );
  // }

  // console.log(itemCount.goldValues);

  return itemCount;
}

export function getBlessThree(itemName, blessValue, ignoredItems) {
  let result = {};
  let id = 1;

  function getBlessItems(item, value) {
    if (value <= 0 || item.bless === 0) {
      return [];
    }

    const blessItems = items.filter(
      (targetItem) =>
        targetItem.rarity === item.rarity &&
        targetItem.level >= Math.floor(item.level / 2) &&
        targetItem.slot === item.slot &&
        !ignoredItems.includes(targetItem.id.toString())
    );

    if (blessItems.length === 0) {
      const c = cloneObj(item);

      c._id = id++;

      return [c];
    }

    const sortedItems = blessItems.sort((a, b) => a.level - b.level || a.value - b.value);

    const result = Array.from({ length: value }, (_, i) => {
      const clone = cloneObj(sortedItems[0]);
      clone._id = id++;

      clone.bless = i;
      clone.currentBless = i;

      clone.children = getBlessItems(clone, i);
      return clone;
    });

    return result;
  }

  const targetItem = items.find((item) => item.name === itemName);

  result = { ...targetItem };
  result.children = [];

  if (result.rarity === 'Legendary') {
    const sacrificialItem = findItems(targetItem, ignoredItems);

    sacrificialItem._id = id++;
    sacrificialItem.bless = blessValue === 1 ? 0 : blessValue - 1;
    sacrificialItem.currentBless = blessValue === 1 ? 0 : blessValue - 1;
    sacrificialItem.children = getBlessItems(sacrificialItem, blessValue === 1 ? 0 : blessValue - 1);

    result.children = [...result.children, sacrificialItem];

    result._id = 0;
  } else {
    result._id = id;
    id++;

    result.currentBless = blessValue;
    result.children = getBlessItems(targetItem, blessValue);
  }

  return result;
}
