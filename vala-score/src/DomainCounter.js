import React, { useState } from 'react';

function DomainCounter({state,setters}) {
    const { worker, soldier, shadow, holy, totalDomains } = state;
    const { setWorker, setSoldier, setShadow, setHoly, setTotalDomains } = setters;

  return (
    <div className="domain-counter">
        <h2>Domain Counter</h2>
        <div>
            Total Domains: 
            <input type="number" value={totalDomains} onChange={(e) => setTotalDomains(parseInt(e.target.value))} />
            <button onClick={() => setTotalDomains(totalDomains + 1)}>+</button>
            <button onClick={() => setTotalDomains(totalDomains - 1)}>-</button>
        </div>
      <div>
        Worker: 
        <input type="number" value={worker} onChange={(e) => setWorker(parseInt(e.target.value))} />
        <button onClick={() => setWorker(worker + 1)}>+</button>
        <button onClick={() => setWorker(worker - 1)}>-</button>
      </div>

      <div>
        Soldier: 
        <input type="number" value={soldier} onChange={(e) => setSoldier(parseInt(e.target.value))} />
        <button onClick={() => setSoldier(soldier + 1)}>+</button>
        <button onClick={() => setSoldier(soldier - 1)}>-</button>
      </div>

      <div>
        Shadow: 
        <input type="number" value={shadow} onChange={(e) => setShadow(parseInt(e.target.value))} />
        <button onClick={() => setShadow(shadow + 1)}>+</button>
        <button onClick={() => setShadow(shadow - 1)}>-</button>
      </div>

      <div>
        Holy: 
        <input type="number" value={holy} onChange={(e) => setHoly(parseInt(e.target.value))} />
        <button onClick={() => setHoly(holy + 1)}>+</button>
        <button onClick={() => setHoly(holy - 1)}>-</button>
      </div>
    </div>
  );
}

export default DomainCounter;