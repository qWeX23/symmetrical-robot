import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const MultiplayerBanner = () => {
  const [players, setPlayers] = useState([]);
  const [isServerOnline, setServerOnline] = useState(false);

  useEffect(() => {
    const socket = io('http://localhost:3000'); // Replace with your server URL

    socket.on('connect', () => {
      setServerOnline(true);
    });

    socket.on('disconnect', () => {
      setServerOnline(false);
    });

    socket.on('playersUpdate', (updatedPlayers) => {
      setPlayers(updatedPlayers);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h2>Multiplayer Banner</h2>
      <p>Server Status: {isServerOnline ? 'Online' : 'Offline'}</p>
      <ul>
        {players.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MultiplayerBanner;
