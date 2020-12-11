import React, { Component } from 'react';

import { Button, Input, Select, Result } from '../Calculator/components';


const VAT = 0.23;

class CalculatorClass extends Component {

    state = {
        amount: 0,
        tip: 0,
        result: 0,
        name: ''

    };

    handleChangeAmount = (e) => {
        console.log('input value', e.target.value)
        this.setState({
            amount: e.target.value
        });
    };
    handleChangeTip = (e) => {
        console.log('input value', e.target.value)
        this.setState({
            tip: e.target.value
        });
    };



    // handleChange = (e) => {
        // const { target: { name, value } } = e;   or
    //     const { name, value } = e.target;
        // this.setState({
        //     [name]: value
        // });
    // };

    handleSubmit = (e) => {
        e.preventDefault();
        const { amount, tip } = this.state;

        if (amount !== 0 && tip !== 0) {
            let tipAmount = parseFloat(amount) * parseFloat(tip);
            let resultWithoutTax = parseFloat(amount) + tipAmount;
            let taxAmount = resultWithoutTax * VAT;
            let result = resultWithoutTax + taxAmount;

            this.setState({
                result: Math.round(result * 100) / 100
            });
        }
    };


    render() {
        const { amount, tip, result } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Calculator class </h2>
                <Input value={amount} changeHandler={this.handleChangeAmount} />
                {/* <Input value={amount} changeHandler={this.handleChange} /> */}
                <Select value={tip} changeHandler={this.handleChangeTip} />
                {/* <Select value={tip} changeHandler={this.handleChange} /> */}
                <Button />
                <Result value={result} />
            </form>

        )

    }

};

export default CalculatorClass;