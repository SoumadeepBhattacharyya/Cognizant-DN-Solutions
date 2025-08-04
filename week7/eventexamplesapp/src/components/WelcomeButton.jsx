// src/components/WelcomeButton.jsx
import React from 'react';

function WelcomeButton() {
  const greet = (message) => {
    alert(`Message: ${message}`);
  };

  return (
    <div>
      <button onClick={() => greet('Welcome')}>Say Welcome</button>
    </div>
  );
}

export default WelcomeButton;
