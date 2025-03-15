export function cloneObj(original) {
    if (typeof original !== 'object' || original === null) {
      return original;
    }
  
    const copy = Array.isArray(original) ? [] : {};
  
    for (const key in original) {
      if (Object.prototype.hasOwnProperty.call(original, key)) {
        copy[key] = cloneObj(original[key]);
      }
    }
  
    return copy;
  }
  
export function findItems(targetItem, ignoredItems) {
  const rarities = ['Common', 'Uncommon', 'Rare', 'Legendary'];

  for (const rarity of rarities) {
    const item = items.find(
      (item) =>
        item.rarity === rarity &&
        item.level >=  Math.floor(targetItem.level / 2) &&
        item.slot === targetItem.slot &&
        !ignoredItems.includes(item.id.toString())
    );

    if (item) return item;
  }
}