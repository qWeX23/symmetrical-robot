import React, {useState} from 'react';
import ResourceCounter from './ResourceCounter';
import CounterButtonGroup from './CounterButtonGroup';
import DukeCard from './DukeCard';
import { MultiplayerContext } from './MultiplayerContext';
import { useContext } from 'react';


function ScoreBoard() {
  const { gold, magic, fight, preVictory,score,duke, setGold, setMagic, setFight, setPreVictory,setScore,setDuke } = useContext(MultiplayerContext);
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

  const [hills, ] = useState(0);
  const [, setShowHills] = useState(false);
  const [ruins, ] = useState(0);
  const [, setShowRuins] = useState(false);
  const [forest, ] = useState(0);
  const [, setShowForest] = useState(false);
  const [swamp, ] = useState(0);
  const [, setShowSwamp] = useState(false);
  const [mountains, ] = useState(0);
  const [, setShowMountains] = useState(false);
  const [caverns, ] = useState(0);
  const [, setShowCaverns] = useState(false);
  const [barrens, ] = useState(0);
  const [, setShowBarrens] = useState(false);
  const [valley, ] = useState(0);
  const [, setShowValley] = useState(false);
  const [boss, setBoss] = useState(0);
  const [showBoss, setShowBoss] = useState(false);
  const [minion, setMinion] = useState(0);
  const [showMinion, setShowMinion] = useState(false);
  const [beast, setBeast] = useState(0);
  const [showBeast, setShowBeast] = useState(false);
  const [titan, setTitan] = useState(0);
  const [showTitan, setShowTitan] = useState(false);
  const [totalMonsters, setTotalMonsters] = useState(0);
  const [showTotalMonsters, setShowTotalMonsters] = useState(false);
  const [victoryFromMonsters, setVictoryFromMonsters] = useState(0);
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
    totalMonsters,
    victoryFromMonsters,
  };


  const [totalCitizens, setTotalCitizens] = useState(0);
  const [showTotalCitizens, setShowTotalCitizens] = useState(false);
  const [totalDomains, setTotalDomains] = useState(0);
  const [showTotalDomains, setShowTotalDomains] = useState(false);
  const [victoryFromDomain, setVictoryFromDomain] = useState(0);
  const [worker, setWorker] = useState(0);
  const [showWorker, setShowWorker] = useState(false);
  const [shadow, setShadow] = useState(0);
  const [showShadow, setShowShadow] = useState(false);
  const [holy, setHoly] = useState(0);
  const [showHoly, setShowHoly] = useState(false);
  const [soldier, setSoldier] = useState(0);
  const [showSoldier, setShowSoldier] = useState(false);
  const roleState = {
    totalCitizens,
    totalDomains,
    victoryFromDomain,
    worker,
    shadow,
    holy,
    soldier,
  };

  const showSetters = {
    setShowHills,
    setShowRuins,
    setShowForest,
    setShowSwamp,
    setShowMountains,
    setShowCaverns,
    setShowBarrens,
    setShowValley,
    setShowBoss,
    setShowMinion,
    setShowBeast,
    setShowTitan,
    setShowTotalMonsters,
    setShowTotalCitizens,
    setShowTotalDomains,
    setShowWorker,
    setShowShadow,
    setShowHoly,
    setShowSoldier,
  };

  return (
    <div className="score-board">
      <DukeCard monsterState={monsterState} resourceState={resourcesState} roleState={roleState} showSetters={showSetters} scoreState={{score,setScore}} dukeState={{duke,setDuke}}></DukeCard>
      <ResourceCounter state={resourcesState} setters={resourcesSetters}/>
      <div className="monster-counter">
        {showTotalMonsters && <CounterButtonGroup id='total-monsters-counter' label='Total Monsters' value={totalMonsters} setValue={setTotalMonsters}></CounterButtonGroup>}
        <CounterButtonGroup id='victory-from-monsters-counter' label='Victory from Monsters' value={victoryFromMonsters} setValue={setVictoryFromMonsters}></CounterButtonGroup>
        {showBoss && <CounterButtonGroup id='boss-counter' label='Boss' value={boss} setValue={setBoss}></CounterButtonGroup>}
        {showMinion && <CounterButtonGroup id='minion-counter' label='Minion' value={minion} setValue={setMinion}></CounterButtonGroup>}
        {showBeast && <CounterButtonGroup id='beast-counter' label='Beast' value={beast} setValue={setBeast} />}
        {showTitan && <CounterButtonGroup id='titan-counter' label='Titan' value={titan} setValue={setTitan} />}
      </div>
      {showTotalCitizens && <CounterButtonGroup id='total-citizens-counter' label='Total Citizens' value={totalCitizens} setValue={setTotalCitizens} />}
      {showWorker && <CounterButtonGroup id='worker-counter' label='Worker' value={worker} setValue={setWorker} />}
      {showSoldier && <CounterButtonGroup id='soldier-counter' label='Soldier' value={soldier} setValue={setSoldier} />}
      {showShadow && <CounterButtonGroup id='shadow-counter' label='Shadow' value={shadow} setValue={setShadow} />}
      {showHoly && <CounterButtonGroup id='holy-counter' label='Holy' value={holy} setValue={setHoly} />}
      <div className="domain-counter">
        {showTotalDomains && <CounterButtonGroup id='total-domains-counter' label='Total Domains' value={totalDomains} setValue={setTotalDomains} />}
        <CounterButtonGroup id='victory-from-domain-counter' label='Victory from Domain' value={victoryFromDomain} setValue={setVictoryFromDomain} />
      </div>
    </div>
  );
}

export default ScoreBoard;