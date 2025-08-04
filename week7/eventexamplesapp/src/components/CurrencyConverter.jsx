// src/components/CurrencyConvertor.jsx
import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    const converted = (parseFloat(rupees) / 88).toFixed(2); // Assume 1 Euro = 88 INR
    setEuro(converted);
  };

  return (
    <div>
      <h2>Currency Convertor (INR → EUR)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter amount in INR"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        />
        <button type="submit">Convert</button>
      </form>
      {euro && <p>Converted Amount: €{euro}</p>}
    </div>
  );
}

export default CurrencyConvertor;
