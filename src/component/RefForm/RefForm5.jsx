import React, { useEffect, useRef } from 'react';

const RefForm5 = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

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
                <input ref={nameRef} defaultValue={"Meherab"} type="text" name="name" id="" placeholder='task-5' />
                <br />
                <input ref={emailRef} type="email" name="password" id="" />
                <br />
                <input ref={passwordRef} type="password" name="" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm5;