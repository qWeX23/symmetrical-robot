import React, { useState } from 'react';

function ResourceCounter({state, setters}) {
    const { gold, magic, fight, preVictory } = state;
    const { setGold, setMagic, setFight, setPreVictory } = setters;

  return (
    <div className="resource-counter">
        <h2>Resource Counter</h2>
      <div className="form-group">
        <label htmlFor='gold-input'>Gold:</label> 
        <input id='gold-input' type="number" value={gold} onChange={(e) => setGold(parseInt(e.target.value))} />
        <div className="button-group">
            <button onClick={() => setGold(gold + 1)}>+</button>
            <button onClick={() => setGold(gold - 1)}>-</button>
        </div>
      </div>

      <div className="form-group">
        <label for='magic-input'>Magic:</label>
        <input id='magic-input' type="number" value={magic} onChange={(e) => setMagic(parseInt(e.target.value))} />
        <div className="button-group">
          <button onClick={() => setMagic(magic + 1)}>+</button>
          <button onClick={() => setMagic(magic - 1)}>-</button>
      </div>
      </div>

      <div className="form-group">
        Fight: 
        <input type="number" value={fight} onChange={(e) => setFight(parseInt(e.target.value))} />
        <div className="button-group">
       
        <button onClick={() => setFight(fight + 1)}>+</button>
        <button onClick={() => setFight(fight - 1)}>-</button>
        </div>
      </div>

      <div className="form-group">
        Victory: 
        <input type="number" value={preVictory} onChange={(e) => setPreVictory(parseInt(e.target.value))} />
        <div className="button-group">
        
        <button onClick={() => setPreVictory(preVictory + 1)}>+</button>
        <button onClick={() => setPreVictory(preVictory - 1)}>-</button>
        </div>
      </div>
    </div>
  );
}

export default ResourceCounter;