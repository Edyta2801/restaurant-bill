import React from 'react';
import './App.css';
import {CalculatorFunction, CalculatorClass, CalculatorFunctionWithHook}  from './components/Calculator';

function App() {
  return (
    <div className="App">
      <CalculatorFunction/>
      <CalculatorFunctionWithHook/>
      {/* <CalculatorClass/> */}
    </div>
  );
}

export default App;
