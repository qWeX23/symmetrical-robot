import React,{useState} from "react";

function DukeCard({ monsterState, resourceState, citizenState, domainsState }) {
    const [duke, setDuke] = useState("Aguilar the Gilded Knight");
    const { hills, ruins, forest, swamp, mountains, caverns, barrens, valley, boss, minion,beast,titan } = monsterState;

    const worker = citizenState.worker + domainsState.worker;
    const soldier = citizenState.soldier + domainsState.soldier;
   console.log("soldier");
    console.log(soldier);
    console.log(citizenState.soldier);
    console.log(domainsState.soldier);
    const thief = citizenState.shadow + domainsState.shadow;
    const holy = citizenState.holy + domainsState.holy;

    const totalCitizens = citizenState.totalCitizens;
   

    const totalMonsters = hills + ruins + forest + swamp + mountains + caverns + barrens + valley;
    const totalResources = resourceState.gold + resourceState.magic + resourceState.fight;
    const totalDomains = domainsState.totalDomains;
  
    let score = 0;

    switch (duke) {
        case 'Aguilar the Gilded Knight':
          score = totalMonsters + 2 * totalDomains + (totalResources / 4);
          break;
        case 'Cornelius the Dreamer':
          score = 3 * totalDomains + (totalResources / 3);
          break;
        case 'Daniella the Huntress':
          score = 2 * thief + 2 * beast + (totalResources / 3);
          break;
        case "El'syn, Stain of Shadows":
          score = 2 * holy + 2 * thief + (totalResources / 4);
          break;
        case 'Elysium the Allsmith':
          console.log('Elysium the Allsmith');
          console.log(worker);
          console.log(soldier);
          console.log(thief);
          console.log(holy);
          console.log(totalResources);
          score = worker + soldier + thief + holy + (totalResources / 4);
          break;
        case 'Gurira the Guardian':
          score = totalMonsters + holy + (totalResources / 3);
          break;
        case 'High Priestess Marianna':
          score = 2 * holy + minion + (totalResources / 3);
          break;
        case 'Hrothgar the Conqueror':
          score = 2 * totalMonsters + titan + (totalResources / 4);
          break;
        case 'Isabella the Righteous':
          score = soldier + 2 * holy + (totalResources / 3);
          break;
        case 'Jes\'kala the Joyous Knight':
          score = 2 * totalMonsters + totalDomains + (totalResources / 4);
          break;
        case 'Karsten the Wolf':
          score = worker + totalCitizens + (totalResources / 4);
          break;
        case 'Lekzand\'r the Protector':
          score = worker + 2 * holy + (totalResources / 3);
          break;
        case 'Mico the Monster Slayer':
          score = totalMonsters + 5 * boss + (totalResources / 2);
          break;
        case 'Mulholland the Brave':
          score = 2 * totalCitizens + (totalResources / 4);
          break;
        case 'Node, Master of Swords':
          score = soldier + 2 * thief + (totalResources / 3);
          break;
        case 'Pas\'cal the Gray Hunter':
          score = 2 * totalMonsters + soldier + (totalResources / 5);
          break;
        case 'Reese the Firebrand':
          score = totalCitizens + totalDomains + totalMonsters + (totalResources / 4);
          break;
        case 'Shem the North Sea Guardian':
          score = 2 * totalMonsters + worker + (totalResources / 5);
          break;
        case 'Simon the Unclean':
          score = worker + soldier + (totalResources / 2);
          break;
        case 'Sir Gustavo the Wrathborn':
          score = 2 * soldier + totalDomains + (totalResources / 5);
          break;
        case 'Sir Roberts of Stoneblood':
          score = totalMonsters + thief + (totalResources / 3);
          break;
        case 'Waryn, Master of Rogues':
          score = worker + 2 * thief + (totalResources / 3);
          break;
        default:
          score = 0;
      }
      score = Math.floor(score);
      score = score + resourceState.preVictory
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