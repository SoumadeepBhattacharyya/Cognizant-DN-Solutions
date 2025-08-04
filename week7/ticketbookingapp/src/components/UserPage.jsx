// src/components/UserPage.jsx
import React from 'react';
import Flights from './Flights';

const UserPage = () => {
  return (
    <div>
      <h1>Welcome, User!</h1>
      <Flights />
      <p>You can now book your tickets.</p>
      <button onClick={() => alert("Ticket booked successfully!")}>
        Book Ticket
      </button>
    </div>
  );
};

export default UserPage;
