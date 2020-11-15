import React from 'react';
import './App.css';
import {CalculatorFunction, CalculatorClass}  from './components/Calculator';

function App() {
  return (
    <div className="App">
      <CalculatorFunction/>
      {/* <CalculatorClass/> */}
    </div>
  );
}

export default App;
