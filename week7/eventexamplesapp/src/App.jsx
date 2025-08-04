// src/App.js
import React from 'react';
import Counter from './components/Counter';
import WelcomeButton from './components/WelcomeButton';
import ClickMessage from './components/ClickMessage';
import CurrencyConvertor from './components/CurrencyConverter';

function App() {
  return (
    <div className="App">
      <h1>React Event Handling Examples</h1>
      <Counter />
      <WelcomeButton />
      <ClickMessage />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
