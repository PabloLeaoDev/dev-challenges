import { useState } from "react";
import monsters from "../kakele-data/monsters.json";
import Languages from "../types/Languages";
import styles from '../assets/styles/Lists.module.css';

function MonsterList() {
  const [language, setLanguage] = useState<Languages>('pt');

  return (
    <>
      <div className={styles.container}>
        <h1>Monster List</h1>

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
        {monsters.map((monster) => (
          <div
          key={monster.name}
          className={styles.card}
          >
            <img
              src={monster.image}
              alt={monster.name}
              className={styles.image}
            />
            <h3>{monster[`language.${language}`]}</h3>
            <p className={styles.stats}>Energy: {monster.energy}</p>
            <p className={styles.stats}>Experience: {monster.experience}</p>
            <p className={styles.stats}>Health: {monster.health}</p>
            <p className={styles.stats}>Gold: {monster.gold}</p>
            <p className={styles.stats}>Loot: {monster.loot.join(', ')}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default MonsterList;
