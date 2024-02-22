import React, { useState, useEffect, useContext } from 'react';
import { MultiplayerContext } from './MultiplayerContext';
import socket from './socket';
import PlayerTile from './PlayerTile';

const MultiplayerBanner = () => {
  const [players, setPlayers] = useState([]);
  const [isServerOnline, setServerOnline] = useState(false);
  const { gold, magic, fight, preVictory, score, duke} = useContext(MultiplayerContext);
  const [roomId, setRoomId] = useState('');
  const [showMultiplayerBanner, setShowMultiplayerBanner] = useState(false); 
  useEffect(() => {
    socket.on('connect', () => {
      console.log(socket.id);
      setServerOnline(true);
    });

    socket.on('disconnect', () => {
      setServerOnline(false);
    });

    socket.on('playersUpdate', (updatedPlayers) => {
      console.log('Received players update:', updatedPlayers);
      if (updatedPlayers.socketId === socket.id) {
        return;
      }
      setPlayers((prevPlayers) => {
        const existingPlayerIndex = prevPlayers.findIndex((player) => player.socketId === updatedPlayers.socketId);
        if (existingPlayerIndex !== -1) {
          // Update existing player
          const updatedPlayer = { ...prevPlayers[existingPlayerIndex], ...updatedPlayers };
          return [
            ...prevPlayers.slice(0, existingPlayerIndex),
            updatedPlayer,
            ...prevPlayers.slice(existingPlayerIndex + 1)
          ];
        } else {
          // Insert new player
          return [...prevPlayers, updatedPlayers];
        }
      });
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('playersUpdate');
    };
  }, []);

  useEffect(() => {
    if (isServerOnline) {
      socket.emit('stateUpdate', { gold, magic, fight, preVictory,score,duke, roomId });
    }
  }, [gold, magic, fight, preVictory,score,isServerOnline,duke, roomId]);

  const toggleDiv = () => {
    setShowMultiplayerBanner(!showMultiplayerBanner);
  };

  return (
    <div>
        <button onClick={toggleDiv}>Multiplayer</button>
      {showMultiplayerBanner &&
        <div> 
          <p><span style={{ color: isServerOnline ? 'green' : 'red' }}>{isServerOnline ? 'Online' : 'Offline'}</span></p>
          <input
            type="text"
            placeholder="RoomID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
          <div className='MultiplayerTileContainer'>
            {players.map((player) => (
              <PlayerTile key={player.socketId} player={player} />
            ))}
          </div>
        </div>
      }
    </div>
  );
};

export default MultiplayerBanner;
