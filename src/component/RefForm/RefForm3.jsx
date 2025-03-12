import React, { useEffect, useRef } from 'react';

const RefForm3 = () => {

    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");

    useEffect(()=>{
        nameRef.current.focus();
    }, []);

    const handleOnSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input ref={nameRef} defaultValue={"Meherab"} type="text" name="name" id="" placeholder='task - 3'/>
                <br />
                <input ref={emailRef} type="email" name="name" id="" />
                <br />
                <input ref={passwordRef} type="password" name="name" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm3;