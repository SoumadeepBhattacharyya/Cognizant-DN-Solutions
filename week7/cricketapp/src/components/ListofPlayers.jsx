// src/components/ListofPlayers.jsx
import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 88 },
    { name: 'Rohit', score: 92 },
    { name: 'Rahul', score: 64 },
    { name: 'Pant', score: 35 },
    { name: 'Hardik', score: 73 },
    { name: 'Jadeja', score: 55 },
    { name: 'Ashwin', score: 78 },
    { name: 'Bumrah', score: 43 },
    { name: 'Shami', score: 51 },
    { name: 'Siraj', score: 84 },
    { name: 'Gill', score: 67 },
  ];

  const allPlayers = players.map((player, index) => (
    <li key={index}>{player.name} - {player.score}</li>
  ));

  const lowScorers = players.filter(p => p.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>{allPlayers}</ul>

      <h2>Players with Score less than 70 </h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
