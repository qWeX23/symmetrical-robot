import React, { useState } from 'react';

function MonsterCounter({state, setters,totalMonsters}) {
    const { hills, ruins, forest, swamp, mountains, caverns, barrens, valley, boss, minion, beast, titan } = state;
    const { setHills, setRuins, setForest, setSwamp, setMountains, setCaverns, setBarrens, setValley, setBoss, setMinion, setBeast, setTitan } = setters;

  return (
    <div className="monster-counter">
        <h2>Monster Area</h2>
        <div>
            Total Monsters: {totalMonsters}
        </div>
        <div>
        Hills: 
        <input type="number" value={hills} onChange={(e) => setHills(parseInt(e.target.value))} />
      </div>

      <div>
        Ruins: 
        <input type="number" value={ruins} onChange={(e) => setRuins(parseInt(e.target.value))} />
      </div>

      <div>
        Forest: 
        <input type="number" value={forest} onChange={(e) => setForest(parseInt(e.target.value))} />
      </div>

      <div>
        Swamp: 
        <input type="number" value={swamp} onChange={(e) => setSwamp(parseInt(e.target.value))} />
      </div>

      <div>
        Mountains: 
        <input type="number" value={mountains} onChange={(e) => setMountains(parseInt(e.target.value))} />
      </div>

      <div>
        Caverns: 
        <input type="number" value={caverns} onChange={(e) => setCaverns(parseInt(e.target.value))} />
      </div>

      <div>
        Barrens: 
        <input type="number" value={barrens} onChange={(e) => setBarrens(parseInt(e.target.value))} />
      </div>

      <div>
        Valley: 
        <input type="number" value={valley} onChange={(e) => setValley(parseInt(e.target.value))} />
      </div>
        <h2>Monster Type</h2>
        <div>
        Boss:   
        <input type="number" value={boss} onChange={(e) => setBoss(parseInt(e.target.value))} />
        </div>
        <div>
        Minion:
        <input type="number" value={minion} onChange={(e) => setMinion(parseInt(e.target.value))} />
        </div>
        <div>
        Beast:
        <input type="number" value={beast} onChange={(e) => setBeast(parseInt(e.target.value))} />
        </div>
        <div>
        Titan:
        <input type="number" value={titan} onChange={(e) => setTitan(parseInt(e.target.value))} />
        </div>
    </div>
  );
}

export default MonsterCounter;