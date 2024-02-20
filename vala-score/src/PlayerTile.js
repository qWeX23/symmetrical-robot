const PlayerTile = ({ player }) => {
    return (
      <div className="player-tile">
        <div className="player-duke-name">{player.state.duke}</div>
        <div className="player-total-score">
            Score: {player.state.score}
        </div>
        <div>
            <div className="player-gold">{player.state.gold}</div> 
            <div className="player-magic">{player.state.magic}</div> 
            <div className="player-fight">{player.state.fight}</div> 
            <div className="player-victory">{player.state.preVictory}</div>
        </div>
      </div>
    );
  };

  export default PlayerTile;