import React, { useState } from 'react';

function CitizenCounter({state,setters}) {
    const { worker, soldier, shadow, holy, totalCitizens } = state;
    const { setWorker, setSoldier, setShadow, setHoly, setTotalCitizens } = setters;

  return (
    <div className="citizen-counter">
        <h2>Citizen Counter</h2>
        <div>
            Total Citizens: 
            <input type="number" value={totalCitizens} onChange={(e) => setTotalCitizens(parseInt(e.target.value))} />
            <button onClick={() => setTotalCitizens(totalCitizens + 1)}>+</button>
            <button onClick={() => setTotalCitizens(totalCitizens - 1)}>-</button>
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

export default CitizenCounter;