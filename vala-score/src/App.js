import './App.css';
import { useState, useEffect } from 'react';
import { MultiplayerContext } from './MultiplayerContext';
import ScoreBoard from './ScoreBoard';
import packageInfo from '../package.json'; 
import { sendNavigatorData } from './api/backend';
import bannerlogo from './images/ValeriaCK_Logopng.png';

function App() {
  const [gold, setGold] = useState(0);
  const [magic, setMagic] = useState(0);
  const [fight, setFight] = useState(0);
  const [preVictory, setPreVictory] = useState(0);
  const [score, setScore] = useState(0);
  const [duke, setDuke] = useState('Aguilar the Gilded Knight');

  useEffect(() => {
    sendNavigatorData()
      .then(data => console.log('Data:', data))
      .catch(error => console.error('Error:', error));
  }, []);
  
  return (
    <div className="App">
      <img src={bannerlogo} alt="Valeria Logo" className="vala-logo" />
      <MultiplayerContext.Provider value={ {gold, magic, fight, preVictory,score,duke, setGold, setMagic, setFight, setPreVictory,setScore,setDuke} }>
        <ScoreBoard />
        {/* <MultiplayerBanner /> */}
      </MultiplayerContext.Provider>
      <div className='app-version'>Client: v{packageInfo.version}</div>
    </div>
  );
}

export default App;
