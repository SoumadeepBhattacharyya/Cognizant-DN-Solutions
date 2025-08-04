// src/components/ClickMessage.jsx
import React from 'react';

function ClickMessage() {
  const handleClick = (event) => {
    console.log(event); // Synthetic event object
    alert('I was clicked');
  };

  return (
    <div>
      <button onClick={handleClick}>OnPress</button>
    </div>
  );
}

export default ClickMessage;
