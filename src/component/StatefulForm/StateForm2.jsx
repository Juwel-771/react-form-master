import React, { useState } from 'react';

const StateForm2 = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    
    const handleOnSubmit = e => {
        e.preventDefault();
        console.log(name, email, password);
    };

    const handleNameChange = e => {
        setName(e.target.value);
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
                <input onChange={handleNameChange} type="text" name="name" id="" placeholder='name'/>
                <br />
                <input onChange={handleEmailChange} type="email" name="email" id="" placeholder='email'/>
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" id="" placeholder='password'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StateForm2;