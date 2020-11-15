import React, { useState } from 'react';

import { Button, Input, Select, Result } from './components';

const VAT = 0.23;

function CalculatorFunction() {
    const [amount, setAmount] = useState('');
    const [tip, setTip] = useState('');
    const [result, setResult] = useState(0)

    const handleAmountChange = (event) => {
        const value = event.target.value;
        setAmount(value);
    }

    const handleTipChange = (event) => {
        const value = event.target.value;
        setTip(value);
    }


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
            <h2>Calculator (func)</h2>
            <Input value={amount} changeHandler={handleAmountChange} />
            <Select value={tip} changeHandler={handleTipChange} />
            <Button />
            <Result value={result} />
        </form>

    );
}

export default CalculatorFunction;