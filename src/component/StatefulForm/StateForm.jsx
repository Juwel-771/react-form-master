import React, { useState } from 'react';

const StateForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


    const handleOnSubmit = e => {
        e.preventDefault();
        console.log(name, email, password);
    };

    const handleNameChange = e => {
        setName(e.target.value)
    };

    const handleEmailChange = e => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    return (
        <div>
              
            <form onSubmit={handleOnSubmit}>
                <input onChange={handleNameChange} type="text" name="name" id="" />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" id="" />
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StateForm;