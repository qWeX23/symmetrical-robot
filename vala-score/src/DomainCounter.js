import React, { useState } from 'react';
import CounterButtonGroup from './CounterButtonGroup';
function DomainCounter({state,setters}) {
    const { worker, soldier, shadow, holy, totalDomains } = state;
    const { setWorker, setSoldier, setShadow, setHoly, setTotalDomains } = setters;

  return (
    <div className="domain-counter">
        <h2>Domains</h2>
      <CounterButtonGroup id='total-domains-counter' label='Total Domains' value={totalDomains} setValue={setTotalDomains} />
      <CounterButtonGroup id='worker-counter' label='Worker' value={worker} setValue={setWorker} />
      <CounterButtonGroup id='soldier-counter' label='Soldier' value={soldier} setValue={setSoldier} />
      <CounterButtonGroup id='shadow-counter' label='Shadow' value={shadow} setValue={setShadow} />
      <CounterButtonGroup id='holy-counter' label='Holy' value={holy} setValue={setHoly} />
    </div>
  );
}

export default DomainCounter;