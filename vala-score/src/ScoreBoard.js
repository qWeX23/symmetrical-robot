import React, {useState} from 'react';
import ResourceCounter from './ResourceCounter';
import MonsterCounter from './MonsterCounter';
import CitizenCounter from './CitizenCounter';
import DomainCounter from './DomainCounter';
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

  const [monsterState, setMonsterState] = useState({
    hills: 0,
    ruins: 0,
    forest: 0,
    swamp: 0,
    mountains: 0,
    caverns: 0,
    barrens: 0,
    valley: 0,
    boss: 0,
    minion: 0,
    beast: 0,
    titan: 0
  });

  const monsterSetters = {
    setHills: (value) => setMonsterState(prev => ({ ...prev, hills: value })),
    setRuins: (value) => setMonsterState(prev => ({ ...prev, ruins: value })),
    setForest: (value) => setMonsterState(prev => ({ ...prev, forest: value })),
    setSwamp: (value) => setMonsterState(prev => ({ ...prev, swamp: value })),
    setMountains: (value) => setMonsterState(prev => ({ ...prev, mountains: value })),
    setCaverns: (value) => setMonsterState(prev => ({ ...prev, caverns: value })),
    setBarrens: (value) => setMonsterState(prev => ({ ...prev, barrens: value })),
    setValley: (value) => setMonsterState(prev => ({ ...prev, valley: value })),
    setBoss: (value) => setMonsterState(prev => ({ ...prev, boss: value })),
    setMinion: (value) => setMonsterState(prev => ({ ...prev, minion: value })),
    setTitan: (value) => setMonsterState(prev => ({ ...prev, titan: value })),
    setBeast: (value) => setMonsterState(prev => ({ ...prev, beast: value })),
  };
  const totalMonsters = monsterState.hills + monsterState.ruins + monsterState.forest + monsterState.swamp + monsterState.mountains + monsterState.caverns + monsterState.barrens + monsterState.valley;

  const [citizenState,setCitizenState] = useState({
    worker: 0,
    soldier: 0,
    shadow: 0,
    holy: 0,
    totalCitizens: 0,
  });
  const citizenSetters = {
    setWorker: (value) => setCitizenState(prev => ({ ...prev, worker: value })),
    setSoldier: (value) => setCitizenState(prev => ({ ...prev, soldier: value })),
    setShadow: (value) => setCitizenState(prev => ({ ...prev, shadow: value })),
    setHoly: (value) => setCitizenState(prev => ({ ...prev, holy: value })),
    setTotalCitizens: (value) => setCitizenState(prev => ({ ...prev, totalCitizens: value })),
  };


  const [domainState,setDomainState] = useState({
    worker: 0,
    soldier: 0,
    shadow: 0,
    holy: 0,
    totalDomains: 0,
  });
  const domainSetters = {
    setWorker: (value) => setDomainState(prev => ({ ...prev, worker: value })),
    setSoldier: (value) => setDomainState(prev => ({ ...prev, soldier: value })),
    setShadow: (value) => setDomainState(prev => ({ ...prev, shadow: value })),
    setHoly: (value) => setDomainState(prev => ({ ...prev, holy: value })),
    setTotalDomains: (value) => setDomainState(prev => ({ ...prev, totalDomains: value })),
  };

  return (
    <div className="score-board">
        <DukeCard monsterState={monsterState} resourceState={resourcesState} citizenState={citizenState} domainsState={domainState}></DukeCard>
        <ResourceCounter state={resourcesState} setters={resourcesSetters}/>
        <MonsterCounter state={monsterState} setters={monsterSetters} totalMonsters={totalMonsters}/>
        <CitizenCounter state={citizenState} setters={citizenSetters}/>
        <DomainCounter state={domainState} setters={domainSetters}/>
    </div>
  );
}

export default ScoreBoard;