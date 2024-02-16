import './App.css';
import ScoreBoard from './ScoreBoard';
import packageInfo from '../package.json'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ScoreBoard />
      </header>
      <div className='app-version'>v{packageInfo.version}</div>
    </div>
  );
}

export default App;
