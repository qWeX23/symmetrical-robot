import './App.css';
import { useState, useEffect } from 'react';
import { MultiplayerContext } from './MultiplayerContext';
import ScoreBoard from './ScoreBoard';
import packageInfo from '../package.json'; 
import MultiplayerBanner from './MultiplayerBanner';

function App() {
  const [gold, setGold] = useState(0);
  const [magic, setMagic] = useState(0);
  const [fight, setFight] = useState(0);
  const [preVictory, setPreVictory] = useState(0);
  const [score, setScore] = useState(0);
  const [duke, setDuke] = useState('Aguilar the Gilded Knight');
  const [serverVersion, setServerVersion] = useState('');

  useEffect(() => {
    // Fetch the server version when the component mounts
    fetch('https://vala-score-be-prod.onrender.com/version')
      .then(response => response.json())
      .then(data => setServerVersion(data.version))
      .catch(error => console.error('Error:', error));
  }, []);
  
  return (
    <div className="App">
      <MultiplayerContext.Provider value={ {gold, magic, fight, preVictory,score,duke, setGold, setMagic, setFight, setPreVictory,setScore,setDuke} }>
        <header className="App-header">
          <ScoreBoard />
        </header>
        <MultiplayerBanner />
      </MultiplayerContext.Provider>
      <div className='app-version'>Client: v{packageInfo.version} Server: v{serverVersion}</div>
    </div>
  );
}

export default App;
