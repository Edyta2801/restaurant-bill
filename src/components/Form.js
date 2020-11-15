import React from 'react';

function Form() {

const handleSubmit=(event)=>{
    event.preventDefault();
}

    return (
        <form onSubmit={handleSubmit}>
            Przelicz swój rachunek :
            <input type='number' />
            <select>
                <option value='5'>5%</option>
                <option value='10'>10%</option>
                <option value='15'>15%</option>
                <option value='20'>20%</option>
            </select>
            <button >Przelicz</button>
        </form>
    );
}

export default Form;
