import React from "react";
import Select, { components } from 'react-select';import { calculateDukeScore } from "./DukeCalculator";
import aguilarPortrait from './images/dukePortraitsSmall/aguilar-the-gilded-knight.jpg';
import corneliusPortrait from './images/dukePortraitsSmall/cornelius-the-dreamer.jpg';
import danielaPortrait from './images/dukePortraitsSmall/daniela-the-huntress.jpg';
import drakkenstrikePortrait from './images/dukePortraitsSmall/drakkenstrike.jpg';
import elsynPortrait from './images/dukePortraitsSmall/elsyn-saint-of-shadows.jpg';
import elysiumPortrait from './images/dukePortraitsSmall/elysium-the-allsmith.jpg';
import guriraPortrait from './images/dukePortraitsSmall/gurira-the-guardian.jpg';
import mariannaPortrait from './images/dukePortraitsSmall/high-priestess-marianna.jpg';
import hrothgarPortrait from './images/dukePortraitsSmall/hrothgar-the-conqueror.jpg';
import isabellaPortrait from './images/dukePortraitsSmall/isabella-the-righteous.jpg';
import jeskalaPortrait from './images/dukePortraitsSmall/jeskala-the-joyous-knight.jpg';
import karstenPortrait from './images/dukePortraitsSmall/karsten-the-wolf.jpg';
import lekzandrPortrait from './images/dukePortraitsSmall/lekzandr-the-protector.jpg';
import micoPortrait from './images/dukePortraitsSmall/mico-the-monster-slayer.jpg';
import mulhollandPortrait from './images/dukePortraitsSmall/mulholland-the-brave.jpg';
import nodePortrait from './images/dukePortraitsSmall/node-master-of-swords.jpg';
import pascalPortrait from './images/dukePortraitsSmall/pascal-the-gray-hunter.jpg';
import reesePortrait from './images/dukePortraitsSmall/reese-the-firebrand.jpg';
import shemPortrait from './images/dukePortraitsSmall/shem-the-north-sea-guardian.jpg';
import simonPortrait from './images/dukePortraitsSmall/simon-the-unclean.jpg';
import gustavoPortrait from './images/dukePortraitsSmall/sir-gustavo-the-wrathborn.jpg';
import robertsPortrait from './images/dukePortraitsSmall/sir-roberts-of-stoneblood.jpg';
import warynPortrait from './images/dukePortraitsSmall/waryn-lord-of-rogues.jpg';
import waybrightPortrait from './images/dukePortraitsSmall/waybright-the-wise.jpg';

const options = [
  { value: 'Aguilar the Gilded Knight', label: 'Aguilar the Gilded Knight', image: aguilarPortrait },
  { value: 'Cornelius the Dreamer', label: 'Cornelius the Dreamer', image: corneliusPortrait },
  { value: 'Daniela the Huntress', label: 'Daniela the Huntress', image: danielaPortrait },
  { value: 'Drakkenstrike', label: 'Drakkenstrike', image: drakkenstrikePortrait },
  { value: "El'syn, Saint of Shadows", label: "El'syn, Saint of Shadows", image: elsynPortrait },
  { value: 'Elysium the Allsmith', label: 'Elysium the Allsmith', image: elysiumPortrait },
  { value: 'Gurira the Guardian', label: 'Gurira the Guardian', image: guriraPortrait },
  { value: 'High Priestess Marianna', label: 'High Priestess Marianna', image: mariannaPortrait },
  { value: 'Hrothgar the Conqueror', label: 'Hrothgar the Conqueror', image: hrothgarPortrait },
  { value: 'Isabella the Righteous', label: 'Isabella the Righteous', image: isabellaPortrait },
  { value: 'Jes\'kala the Joyous Knight', label: 'Jes\'kala the Joyous Knight', image: jeskalaPortrait },
  { value: 'Karsten the Wolf', label: 'Karsten the Wolf', image: karstenPortrait },
  { value: 'Lekzand\'r the Protector', label: 'Lekzand\'r the Protector', image: lekzandrPortrait },
  { value: 'Mico the Monster Slayer', label: 'Mico the Monster Slayer', image: micoPortrait },
  { value: 'Mulholland the Brave', label: 'Mulholland the Brave', image: mulhollandPortrait },
  { value: 'Node, Master of Swords', label: 'Node, Master of Swords', image: nodePortrait },
  { value: 'Pas\'cal the Gray Hunter', label: 'Pas\'cal the Gray Hunter', image: pascalPortrait },
  { value: 'Reese the Firebrand', label: 'Reese the Firebrand', image: reesePortrait },
  { value: 'Shem the North Sea Guardian', label: 'Shem the North Sea Guardian', image: shemPortrait },
  { value: 'Simon the Unclean', label: 'Simon the Unclean', image: simonPortrait },
  { value: 'Sir Gustavo the Wrathborn', label: 'Sir Gustavo the Wrathborn', image: gustavoPortrait },
  { value: 'Sir Roberts of Stoneblood', label: 'Sir Roberts of Stoneblood', image: robertsPortrait },
  { value: 'Waryn, Lord of Rogues', label: 'Waryn, Lord of Rogues', image: warynPortrait },
  { value: 'Waybright the Wise', label: 'Waybright the Wise', image: waybrightPortrait },
];
const CustomOption = ({ children, ...props }) => {
  return (
    <components.Option {...props}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={props.data.image} alt={props.data.label} width="50" height="50" />
        <span style={{ marginLeft: '10px' }}>{children}</span>
      </div>
    </components.Option>
  );
};

function DukeCard({ monsterState, resourceState, roleState, showSetters, scoreState,dukeState}) {
    const {duke, setDuke} = dukeState;
    const { boss, minion,beast,titan,totalMonsters,victoryFromMonsters} = monsterState;
    const{
      totalCitizens,
      totalDomains,
      victoryFromDomain,
      worker,
      shadow,
      holy,
      soldier,
    } = roleState;

    const totalResources = resourceState.gold + resourceState.magic + resourceState.fight;

  
    let {score} = scoreState.score;
    const setScore = scoreState.setScore;

    const resetShowSetters = () => {
      for (let key in showSetters) {
          if (showSetters.hasOwnProperty(key) && typeof showSetters[key] === 'function') {
              showSetters[key](false);
          }
      }
    };
    resetShowSetters();
    score = calculateDukeScore(duke.value, totalMonsters, totalDomains, totalResources, shadow, beast, soldier, holy, worker, minion, titan, totalCitizens, boss, showSetters, resourceState, victoryFromDomain, victoryFromMonsters);
    setScore(score); 


    //setup the select 
   
    return( <div className="duke-counter">
       <Select
        className="duke-select"
        value={duke}
        onChange={selectedOption => setDuke(selectedOption)}
        options={options}
        components={{
          Option: CustomOption,
        }}
        placeholder="Select your Duke"
    />
   
      <h2 className="score-text">
        Score: {score}
      </h2>
  </div>
);
}
export default DukeCard;