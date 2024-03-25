export function calculateDukeScore(duke, totalMonsters, totalDomains, totalResources, shadow, beast, soldier, holy, worker, minion, titan, totalCitizens, boss, showSetters, resourceState, victoryFromDomain, victoryFromMonsters) {
  let score;
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
    case 'Drakkenstrike':
      score = soldier + 2 * totalDomains + (totalResources / 4);
      showSetters.setShowSoldier(true);
      showSetters.setShowTotalDomains(true);
      break;
    case "El'syn, Saint of Shadows":
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
    case 'Waryn, Lord of Rogues':
      score = worker + 2 * shadow + (totalResources / 3);
      showSetters.setShowWorker(true);
      showSetters.setShowShadow(true);
      break;
    case 'Waybright the Wise':
      score = totalDomains * 2 + worker + (totalResources / 4);
      showSetters.setShowTotalDomains(true);
      showSetters.setShowWorker(true);
      break;
    default:
      score = 0;
  }
  score = Math.floor(score);
  score = score + resourceState.preVictory + victoryFromDomain + victoryFromMonsters;
  return score;
}