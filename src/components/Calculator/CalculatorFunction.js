import React from 'react';

import {Button, Input, Select, Result} from './components';



function CalculatorFunction() {
    return (
        <form onSubmit={handleSubmit}>
            <h2>Calculator (func)</h2>
            <Input value={amount} changeHandler={handleAmountChange}/>
            <Select value={tip} changeHandler={handleTipChange} />
            <Button />
            <Result value={result} />
        </form>

    );
}
export default CalculatorFunction;