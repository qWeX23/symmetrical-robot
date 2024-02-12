import React, { useState } from 'react';
import CounterButtonGroup from './CounterButtonGroup';

function ResourceCounter({state, setters}) {
    const { gold, magic, fight, preVictory } = state;
    const { setGold, setMagic, setFight, setPreVictory } = setters;

  return (
    <div className="resource-counter">
        <h3>Resources</h3>
      
        <CounterButtonGroup id='gold-input' label='Gold' value={gold} setValue={setGold} />
        <CounterButtonGroup id='magic-input' label='Magic' value={magic} setValue={setMagic} />
        <CounterButtonGroup id='fight-input' label='Fight' value={fight} setValue={setFight} />
        <CounterButtonGroup id='victory-input' label='Victory' value={preVictory} setValue={setPreVictory} />
    </div>
  );
}

export default ResourceCounter;