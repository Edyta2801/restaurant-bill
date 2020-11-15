import React, { useState } from "react";

import { Button, Input, Select, Result } from "./components";

const VAT = 0.23;

function useInput(initialValue = 0) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return [value, handleChange];
}

function CalculatorFunction() {
  const [amount, handleAmountChange] = useInput(0);
  const [tip, handleTipChange] = useInput(0);
  const [result, setResult] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (amount !== 0 && tip !== 0) {
      let tipAmount = parseFloat(amount) * parseFloat(tip);
      let resultWithoutTax = parseFloat(amount) + tipAmount;
      let taxAmount = resultWithoutTax * VAT;
      let result = resultWithoutTax + taxAmount;

      setResult(Math.round(result * 100) / 100);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Calculator func with hook</h2>
      <Input value={amount} changeHandler={handleAmountChange} />
      <Select value={tip} changeHandler={handleTipChange} />
      <Button />
      <Result value={result} />
    </form>
  );
}

export default CalculatorFunction;
