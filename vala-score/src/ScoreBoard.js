import React, {useState} from 'react';
import ResourceCounter from './ResourceCounter';
import CounterButtonGroup from './CounterButtonGroup';
import DukeCard from './DukeCard';

function ScoreBoard() {
  const [gold, setGold] = useState(0);
  const [magic, setMagic] = useState(0);
  const [fight, setFight] = useState(0);
  const [preVictory, setPreVictory] = useState(0);
  const resourcesState = {
    gold,
    magic,
    fight,
    preVictory,
  };
  const resourcesSetters = {
    setGold,
    setMagic,
    setFight,
    setPreVictory,
  };

  const [hills, setHills] = useState(0);
  const [ruins, setRuins] = useState(0);
  const [forest, setForest] = useState(0);
  const [swamp, setSwamp] = useState(0);
  const [mountains, setMountains] = useState(0);
  const [caverns, setCaverns] = useState(0);
  const [barrens, setBarrens] = useState(0);
  const [valley, setValley] = useState(0);
  const [boss, setBoss] = useState(0);
  const [minion, setMinion] = useState(0);
  const [beast, setBeast] = useState(0);
  const [titan, setTitan] = useState(0);
  const totalMonsters = hills + ruins + forest + swamp + mountains + caverns + barrens + valley;
  const monsterState = {
    hills,
    ruins,
    forest,
    swamp,
    mountains,
    caverns,
    barrens,
    valley,
    boss,
    minion,
    beast,
    titan,
    totalMonsters};

  const [citizenWorker, setCitizenWorker] = useState(0);
  const [citizenSoldier, setCitizenSoldier] = useState(0);
  const [citizenShadow, setCitizenShadow] = useState(0);
  const [citizenHoly, setCitizenHoly] = useState(0);
  const [totalCitizens, setTotalCitizens] = useState(0);
  const citizenState = {
    worker: citizenWorker,
    soldier: citizenSoldier,
    shadow: citizenShadow,
    holy: citizenHoly,
    totalCitizens,
  };

  const [domainWorker, setDomainWorker] = useState(0);
  const [domainSoldier, setDomainSoldier] = useState(0);
  const [domainShadow, setDomainShadow] = useState(0);
  const [domainHoly, setDomainHoly] = useState(0);
  const [totalDomains, setTotalDomains] = useState(0);
const domainState = {
  worker: domainWorker,
  soldier: domainSoldier,
  shadow: domainShadow,
  holy: domainHoly,
  totalDomains,
};
  
  return (
    <div className="score-board">
        <DukeCard monsterState={monsterState} resourceState={resourcesState} citizenState={citizenState} domainsState={domainState}></DukeCard>
        <ResourceCounter state={resourcesState} setters={resourcesSetters}/>
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
    <div className="citizen-counter">
        <h3>Citizens</h3>
        <CounterButtonGroup id='total-citizens-counter' label='Total Citizens' value={totalCitizens} setValue={setTotalCitizens} />
        <CounterButtonGroup id='worker-counter' label='Worker' value={citizenWorker} setValue={setCitizenWorker} />
        <CounterButtonGroup id='soldier-counter' label='Soldier' value={citizenSoldier} setValue={setCitizenSoldier} />
        <CounterButtonGroup id='shadow-counter' label='Shadow' value={citizenShadow} setValue={setCitizenShadow} />
        <CounterButtonGroup id='holy-counter' label='Holy' value={citizenHoly} setValue={setCitizenHoly} />
    </div>
    <div className="domain-counter">
        <h2>Domains</h2>
      <CounterButtonGroup id='total-domains-counter' label='Total Domains' value={totalDomains} setValue={setTotalDomains} />
      <CounterButtonGroup id='worker-counter' label='Worker' value={domainWorker} setValue={setDomainWorker} />
      <CounterButtonGroup id='soldier-counter' label='Soldier' value={domainSoldier} setValue={setDomainSoldier} />
      <CounterButtonGroup id='shadow-counter' label='Shadow' value={domainShadow} setValue={setDomainShadow} />
      <CounterButtonGroup id='holy-counter' label='Holy' value={domainHoly} setValue={setDomainHoly} />
    </div>
    </div>
  );
}

export default ScoreBoard;