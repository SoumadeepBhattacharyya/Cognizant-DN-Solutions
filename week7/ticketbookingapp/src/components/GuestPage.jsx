// src/components/GuestPage.jsx
import React from 'react';
import Flights from './Flights';

const GuestPage = () => {
  return (
    <div>
      <h1>Welcome, Guest!</h1>
      <Flights />
      <p>Please log in to book your flight tickets.</p>
    </div>
  );
};

export default GuestPage;
