// src/components/OfficeList.jsx
import React from 'react';

const OfficeList = () => {
  // Single office object
  const featuredOffice = {
    name: 'Tech Park Plaza',
    rent: 75000,
    address: 'Indiranagar, Bangalore',
    
  };

  // Array of office objects
  const offices = [
    { id: 1, name: 'Green Tower', rent: 55000, address: 'Koramangala, Bangalore' },
    { id: 2, name: 'Skyline Hub', rent: 65000, address: 'Whitefield, Bangalore' },
    { id: 3, name: 'Urban Nest', rent: 48000, address: 'HSR Layout, Bangalore' },
    { id: 4, name: 'Corporate Heights', rent: 90000, address: 'MG Road, Bangalore' }
  ];

  const rentStyle = (rent) => ({
    color: rent < 60000 ? 'red' : 'green',
    fontWeight: 'bold'
  });

  return (
    <div style={{ padding: '20px' }}>
      <h2>Featured Office</h2>
      
      <p><strong>Name:</strong> {featuredOffice.name}</p>
      <p><strong>Rent:</strong> <span style={rentStyle(featuredOffice.rent)}>₹{featuredOffice.rent}</span></p>
      <p><strong>Address:</strong> {featuredOffice.address}</p>

      <h2>Other Available Offices</h2>
      <ul>
        {offices.map(office => (
          <li key={office.id} style={{ marginBottom: '20px' }}>
            <p><strong>Name:</strong> {office.name}</p>
            <p><strong>Rent:</strong> <span style={rentStyle(office.rent)}>₹{office.rent}</span></p>
            <p><strong>Address:</strong> {office.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OfficeList;
