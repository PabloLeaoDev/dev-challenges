import { useState } from "react";
import items from '../kakele-data/items.json';
import Languages from "../types/Languages";

function ItemsList() {
  const [language, setLanguage] = useState<Languages>('pt');

  return (
    <>
      <div>
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

      <div>
        {items.map((item) => (
        <div
        key={item.name}
        style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '16px',
          maxWidth: '200px',
        }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
          <h3>{item[`language.${language}`]}</h3>
          <p>Level: {item.level || 'null'}</p>
          <p>Vocation: {item.vocation || 'null'}</p>
          <p>Energy: {item.energy || 'null'}</p>
          <p>Value: {item.value}</p>
          <p>Sources: {item.sources}</p>
          <p>Rarity: {item.rarity}</p>
          <p>Type: {item.type}</p>
          <p>Attack: {item.stats?.attack || 'null'}</p>
          <p>Magic: {item.stats?.magic || 'null'}</p>
          <p>Armor: {item.stats?.armor || 'null'}</p>
          <p>Slot: {item.slot || 'null'}</p>
        </div>
        ))}
      </div>
    </>
  )
}

export default ItemsList;
