import React from 'react';

function Input(props) {

    const { value, changeHandler } = props;

    return (
        <input
            placeholder='Price netto'
            name='amount'
            type='number'
            value={value !== 0 && value}
            onChange={changeHandler}
        />

    );

}

export default Input;