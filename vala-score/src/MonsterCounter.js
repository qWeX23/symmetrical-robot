import React, { useState } from 'react';
import CounterButtonGroup from './CounterButtonGroup';

function MonsterCounter({state, setters,totalMonsters}) {
    const { hills, ruins, forest, swamp, mountains, caverns, barrens, valley, boss, minion, beast, titan } = state;
    const { setHills, setRuins, setForest, setSwamp, setMountains, setCaverns, setBarrens, setValley, setBoss, setMinion, setBeast, setTitan } = setters;

  return (
    <div className="monster-counter">
        <h3>Monsters</h3>
        <div>
            Total Monsters: {totalMonsters}
        </div>
        <h4>Monster Area</h4>

      <CounterButtonGroup id='hills-counter' label='Hills' value={hills} setValue={setHills}></CounterButtonGroup>
      <CounterButtonGroup id='ruins-counter' label='Ruins' value={ruins} setValue={setRuins}></CounterButtonGroup>
      <CounterButtonGroup id='forest-counter' label='Forest' value={forest} setValue={setForest}></CounterButtonGroup>
      <CounterButtonGroup id='swamp-counter' label='Swamp' value={swamp} setValue={setSwamp}></CounterButtonGroup>
      <CounterButtonGroup id='mountains-counter' label='Mountain' value={mountains} setValue={setMountains}></CounterButtonGroup>
      <CounterButtonGroup id='caverns-counter' label='Caverns' value={caverns} setValue={setCaverns}></CounterButtonGroup>
      <CounterButtonGroup id='barrens-counter' label='Barrens' value={barrens} setValue={setBarrens}></CounterButtonGroup>
      <CounterButtonGroup id='valley-counter' label='Valley' value={valley} setValue={setValley}></CounterButtonGroup>
      <h4>Monster Type</h4>
      
      <CounterButtonGroup id='boss-counter' label='Boss' value={boss} setValue={setBoss}></CounterButtonGroup>
      <CounterButtonGroup id='minion-counter' label='Minion' value={minion} setValue={setMinion}></CounterButtonGroup>
      <CounterButtonGroup id='beast-counter' label='Beast' value={beast} setValue={setBeast} />
      <CounterButtonGroup id='titan-counter' label='Titan' value={titan} setValue={setTitan} />
    
    </div>
  );
}

export default MonsterCounter;