// src/components/IndianPlayers.jsx
import React from 'react';

const IndianPlayers = () => {
  const team = ['Virat', 'Rohit', 'Gill', 'Pant', 'Hardik', 'Jadeja'];

  // Destructuring Odd & Even index players
  const oddPlayers = team.filter((_, i) => i % 2 === 0);
  const evenPlayers = team.filter((_, i) => i % 2 !== 0);

  // Merging arrays using ES6 spread operator
  const T20players = ['Surya', 'Arshdeep', 'Kuldeep'];
  const RanjiPlayers = ['Pujara', 'Rahane', 'Saha'];
  const mergedPlayers = [...T20players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddPlayers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenPlayers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Merged T20 + Ranji Players</h2>
      <ul>
        {mergedPlayers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
