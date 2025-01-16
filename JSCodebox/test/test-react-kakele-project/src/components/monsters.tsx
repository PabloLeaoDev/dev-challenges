import { useState } from "react";
import monsters from "../kakele-data/monsters.json";
import Languages from "../types/Languages";

function MonsterList() {
  const [language, setLanguage] = useState<Languages>('pt');

  return (
    <>
      <div>
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

      <div>
        {monsters.map((monster) => (
          <div
          key={monster.name}
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            maxWidth: '200px',
          }}
          >
          <img
            src={monster.image}
            alt={monster.name}
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
          <h3>{monster[`language.${language}`]}</h3>
          <p>Energy: {monster.energy}</p>
          <p>Experience: {monster.experience}</p>
          <p>Health: {monster.health}</p>
          <p>Gold: {monster.gold}</p>
          <p>Loot: {monster.loot.join(', ')}</p>
        </div>
        ))}
      </div>
    </>
  )
}

export default MonsterList;
