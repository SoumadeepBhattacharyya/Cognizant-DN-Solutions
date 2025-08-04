// src/components/Flights.jsx
import React from 'react';

const flightData = [
  { id: 1, from: 'Bangalore', to: 'Delhi', time: '08:00 AM', price: '₹4500' },
  { id: 2, from: 'Mumbai', to: 'Kolkata', time: '11:30 AM', price: '₹5100' },
  { id: 3, from: 'Chennai', to: 'Hyderabad', time: '02:45 PM', price: '₹3900' }
];

const Flights = () => {
  return (
    <div>
      <h2>Available Flights</h2>
      <ul>
        {flightData.map(flight => (
          <li key={flight.id}>
            {flight.from} ➡️ {flight.to} | {flight.time} | {flight.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Flights;
