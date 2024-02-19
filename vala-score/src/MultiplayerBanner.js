import React, { useState, useEffect, useContext } from 'react';
import { MultiplayerContext } from './MultiplayerContext';
import socket from './socket';

const MultiplayerBanner = () => {
  const [players, setPlayers] = useState([]);
  const [isServerOnline, setServerOnline] = useState(false);
  const { gold, magic, fight, preVictory } = useContext(MultiplayerContext);
  const [roomId, setRoomId] = useState('');

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
      socket.emit('stateUpdate', { gold, magic, fight, preVictory,roomId });
    }
  }, [gold, magic, fight, preVictory, roomId]);


  return (
    <div>
      <h4>Multiplayer -- coming soon! </h4>
      <p>Server Status: {isServerOnline ? 'Online' : 'Offline'}</p>
      <input
        type="text"
        placeholder="RoomID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      
        {players.map((player) => (
          <div>
            
              ID: {player.socketId} Gold: {player.state.gold} Magic: {player.state.magic} Fight: {player.state.fight} Victory: {player.state.preVictory}
            
          </div>
        ))}
      
    </div>
  );
};

export default MultiplayerBanner;
