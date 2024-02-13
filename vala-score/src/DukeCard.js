import React,{useState} from "react";

function DukeCard({ monsterState, resourceState, roleState, showSetters }) {
    const [duke, setDuke] = useState("Aguilar the Gilded Knight");
    const { hills, ruins, forest, swamp, mountains, caverns, barrens, valley, boss, minion,beast,titan,totalMonsters,victoryFromMonsters} = monsterState;
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

  
    let score = 0;

    const resetShowSetters = () => {
      for (let key in showSetters) {
          if (showSetters.hasOwnProperty(key) && typeof showSetters[key] === 'function') {
              showSetters[key](false);
          }
      }
  };
  resetShowSetters();


    switch (duke) {
        case 'Aguilar the Gilded Knight':
          score = totalMonsters + 2 * totalDomains + (totalResources / 4);
          showSetters.setShowTotalMonsters(true);
          showSetters.setShowTotalDomains(true);
          break;
        case 'Cornelius the Dreamer':
          score = 3 * totalDomains + (totalResources / 3);
          showSetters.setShowTotalDomains(true);
          break;
        case 'Daniella the Huntress':
          score = 2 * shadow + 2 * beast + (totalResources / 3);
          showSetters.setShowShadow(true);
          showSetters.setShowBeast(true);
          break;
        case "El'syn, Stain of Shadows":
          score = 2 * holy + 2 * shadow + (totalResources / 4);
          showSetters.setShowHoly(true);
          showSetters.setShowShadow(true);
          break;
        case 'Elysium the Allsmith':
          score = worker + soldier + shadow + holy + (totalResources / 4);
          showSetters.setShowWorker(true);
          showSetters.setShowSoldier(true);
          showSetters.setShowShadow(true);
          showSetters.setShowHoly(true);
          break;
        case 'Gurira the Guardian':
          score = totalMonsters + holy + (totalResources / 3);
          showSetters.setShowTotalMonsters(true);
          showSetters.setShowHoly(true);
          break;
        case 'High Priestess Marianna':
          score = 2 * holy + minion + (totalResources / 3);
          showSetters.setShowHoly(true);
          showSetters.setShowMinion(true);
          break;
        case 'Hrothgar the Conqueror':
          score = 2 * totalMonsters + titan + (totalResources / 4);
          showSetters.setShowTotalMonsters(true);
          showSetters.setShowTitan(true);
          break;
        case 'Isabella the Righteous':
          score = soldier + 2 * holy + (totalResources / 3);
          showSetters.setShowSoldier(true);
          showSetters.setShowHoly(true);
          break;
        case 'Jes\'kala the Joyous Knight':
          score = 2 * totalMonsters + totalDomains + (totalResources / 4);
          showSetters.setShowTotalMonsters(true);
          showSetters.setShowTotalDomains(true);
          break;
        case 'Karsten the Wolf':
          score = worker + totalCitizens + (totalResources / 4);
          showSetters.setShowWorker(true);
          showSetters.setShowTotalCitizens(true);
          break;
        case 'Lekzand\'r the Protector':
          score = worker + 2 * holy + (totalResources / 3);
          showSetters.setShowWorker(true);
          showSetters.setShowHoly(true);
          break;
        case 'Mico the Monster Slayer':
          score = totalMonsters + 5 * boss + (totalResources / 2);
          showSetters.setShowTotalMonsters(true);
          showSetters.setShowBoss(true);
          break;
        case 'Mulholland the Brave':
          score = 2 * totalCitizens + (totalResources / 4);
          showSetters.setShowTotalCitizens(true);
          break;
        case 'Node, Master of Swords':
          score = soldier + 2 * shadow + (totalResources / 3);
          showSetters.setShowSoldier(true);
          showSetters.setShowShadow(true);
          break;
        case 'Pas\'cal the Gray Hunter':
          score = 2 * totalMonsters + soldier + (totalResources / 5);
          showSetters.setShowTotalMonsters(true);
          showSetters.setShowSoldier(true);
          break;
        case 'Reese the Firebrand':
          score = totalCitizens + totalDomains + totalMonsters + (totalResources / 4);
          showSetters.setShowTotalCitizens(true);
          showSetters.setShowTotalDomains(true);
          showSetters.setShowTotalMonsters(true);
          break;
        case 'Shem the North Sea Guardian':
          score = 2 * totalMonsters + worker + (totalResources / 5);
          showSetters.setShowTotalMonsters(true);
          showSetters.setShowWorker(true);
          break;
        case 'Simon the Unclean':
          score = worker + soldier + (totalResources / 2);
          showSetters.setShowWorker(true);
          showSetters.setShowSoldier(true);
          break;
        case 'Sir Gustavo the Wrathborn':
          score = 2 * soldier + totalDomains + (totalResources / 5);
          showSetters.setShowSoldier(true);
          showSetters.setShowTotalDomains(true);
          break;
        case 'Sir Roberts of Stoneblood':
          score = totalMonsters + shadow + (totalResources / 3);
          showSetters.setShowTotalMonsters(true);
          showSetters.setShowShadow(true);
          break;
        case 'Waryn, Master of Rogues':
          score = worker + 2 * shadow + (totalResources / 3);
          showSetters.setShowWorker(true);
          showSetters.setShowShadow(true);
          break;
        default:
          score = 0;
      }
      score = Math.floor(score);
      score = score + resourceState.preVictory + victoryFromDomain + victoryFromMonsters;
    return( <div className="duke-counter">
    <div>
        <select id="duke-select" value={duke} onChange={(e) => setDuke(e.target.value)}>
          <option value="Aguilar the Gilded Knight">Aguilar the Gilded Knight</option>
          <option value="Cornelius the Dreamer">Cornelius the Dreamer</option>
          <option value="Daniella the Huntress">Daniella the Huntress</option>
          <option value="El'syn, Stain of Shadows">El'syn, Stain of Shadows</option>
          <option value="Elysium the Allsmith">Elysium the Allsmith</option>
          <option value="Gurira the Guardian">Gurira the Guardian</option>
          <option value="High Priestess Marianna">High Priestess Marianna</option>
          <option value="Hrothgar the Conqueror">Hrothgar the Conqueror</option>
          <option value="Isabella the Righteous">Isabella the Righteous</option>
          <option value="Jes'kala the Joyous Knight">Jes'kala the Joyous Knight</option>
          <option value="Karsten the Wolf">Karsten the Wolf</option>
          <option value="Lekzand'r the Protector">Lekzand'r the Protector</option>
          <option value="Mico the Monster Slayer">Mico the Monster Slayer</option>
          <option value="Mulholland the Brave">Mulholland the Brave</option>
          <option value="Node, Master of Swords">Node, Master of Swords</option>
          <option value="Pas'cal the Gray Hunter">Pas'cal the Gray Hunter</option>
          <option value="Reese the Firebrand">Reese the Firebrand</option>
          <option value="Shem the North Sea Guardian">Shem the North Sea Guardian</option>
          <option value="Simon the Unclean">Simon the Unclean</option>
          <option value="Sir Gustavo the Wrathborn">Sir Gustavo the Wrathborn</option>
          <option value="Sir Roberts of Stoneblood">Sir Roberts of Stoneblood</option>
          <option value="Waryn, Master of Rogues">Waryn, Master of Rogues</option>
        </select>
      </div>
    
    <h2>
      Score: {score}
    </h2>
  </div>
);
}
export default DukeCard;