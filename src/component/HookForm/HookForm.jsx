import React from 'react';
import userInputState from '../../hooks/userInput';

const HookForm = () => {

    // const [name, handleNameChange] = userInputState("Custom Hooked")
    const nameState = userInputState('Juwel')
    const handleOnSubmit = e => {
        e.preventDefault();
        console.log("Form data", nameState.value)
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" id="" placeholder='name'/> */}
                <input {...nameState} type="text" name="name" id="" placeholder='name'/>
                <br />
                <input type="email" name="email" id="" placeholder='email'/>
                <br />
                <input type="password" name="password" id="" placeholder='password'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;