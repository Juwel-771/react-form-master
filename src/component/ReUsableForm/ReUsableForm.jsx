import React, { useRef } from 'react';

const ReUsableForm = ({formTitle, handleSubmit, submitBtn = "Submit", children}) => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
        handleSubmit(data);
    }

    return (
        <div>
            <form onSubmit={handleLocalSubmit} >
                {children}
                <input ref={nameRef} type="text" name="name" id="" placeholder='name'/>
                <br />
                <input ref={emailRef} type="email" name="email" id="" placeholder='email'/>
                <br />
                <input ref={passwordRef} type="password" name="password" id="" placeholder='password'/>
                <br />
                <input type="submit" value={submitBtn} />
            </form>
        </div>
    );
};

export default ReUsableForm;