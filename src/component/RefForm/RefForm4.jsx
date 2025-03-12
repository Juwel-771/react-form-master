import React, { useRef } from 'react';

const RefForm4 = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleOnSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input ref={nameRef} type="text" name="name" id="" placeholder='task - 4'/>
                <br />
                <input ref={emailRef} type="email" name="email" id="" />
                <br />
                <input ref={passwordRef} type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm4;