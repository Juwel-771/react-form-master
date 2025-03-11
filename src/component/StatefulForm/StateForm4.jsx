import React, { use, useState } from 'react';

const StateForm4 = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleOnSubmitChange = e => {
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
            <form onSubmit={handleOnSubmitChange}>
                <input onChange={handleNameChange} type="text" name="name" id="" placeholder='task 4'/>
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

export default StateForm4;