import { useState } from "react";
import items from '../kakele-data/items.json';
import Languages from "../types/Languages";
import styles from '../assets/styles/Lists.module.css';

function ItemsList() {
  const [language, setLanguage] = useState<Languages>('pt');

  return (
    <>
      <div className={styles.container}>
        <h1>Items List</h1>

        <div>
          <label htmlFor="language-select">Select Language: </label>
          <select
            id="language-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value as Languages)}
          >
            <option value="en">English</option>
            <option value="pt">Português</option>
            <option value="pl">Polski</option>
            <option value="es">Español</option>
          </select>
        </div>
      </div>

      <div className={styles.container}>
        {items.map((item) => (
          <div
          key={item.name}
          className={styles.card}
          >
            <img
              src={item.image}
              alt={item.name}
              className={styles.image}
            />
            <h3>{item[`language.${language}`]}</h3>
            <p className={styles.stats}>Level: {item.level || 'null'}</p>
            <p className={styles.stats}>Vocation: {item.vocation || 'null'}</p>
            <p className={styles.stats}>Energy: {item.energy || 'null'}</p>
            <p className={styles.stats}>Value: {item.value}</p>
            <p className={styles.stats}>Sources: {item.sources}</p>
            <p className={styles.stats}>Rarity: {item.rarity}</p>
            <p className={styles.stats}>Type: {item.type}</p>
            <div className="stats">
              <p className={styles.stats}>Attack: {item.stats?.attack || 'null'}</p>
              <p className={styles.stats}>Magic: {item.stats?.magic || 'null'}</p>
              <p className={styles.stats}>Armor: {item.stats?.armor || 'null'}</p>
            </div>
            <p className={styles.stats}>Slot: {item.slot || 'null'}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default ItemsList;
