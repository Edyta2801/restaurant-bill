import React from 'react';

function Result ({value}){
    console.log(value);

    if(value !==0){
        return(
            <p>
                Amount with tip and tax: <span >{value} PLN</span>
            </p>
        );
    }
    return null;
}

export default Result;