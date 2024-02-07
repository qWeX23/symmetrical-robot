import React, { useState } from 'react';
import CounterButtonGroup from './CounterButtonGroup';
function CitizenCounter({state,setters}) {
    const { worker, soldier, shadow, holy, totalCitizens } = state;
    const { setWorker, setSoldier, setShadow, setHoly, setTotalCitizens } = setters;

  return (
    <div className="citizen-counter">
        <h2>Citizen Counter</h2>
        <CounterButtonGroup id='total-citizens-counter' label='Total Citizens' value={totalCitizens} setValue={setTotalCitizens} />
        <CounterButtonGroup id='worker-counter' label='Worker' value={worker} setValue={setWorker} />
        <CounterButtonGroup id='soldier-counter' label='Soldier' value={soldier} setValue={setSoldier} />
        <CounterButtonGroup id='shadow-counter' label='Shadow' value={shadow} setValue={setShadow} />
        <CounterButtonGroup id='holy-counter' label='Holy' value={holy} setValue={setHoly} />
    </div>
  );
}

export default CitizenCounter;