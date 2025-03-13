import React, { useRef } from 'react';

const ReUsableForm2 = ({formTitle, handleOnSubmit, submitBtn = "Upload"}) => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLocalSubmit = e =>{
        e.preventDefault();

        const stateData = {
            name : nameRef.current.value,
            email : emailRef.current.value,
            passwordRef : passwordRef.current.value
        }
        handleOnSubmit(stateData)
    }

    return (
        <div>
            <form onSubmit={handleLocalSubmit}>
                <p>{formTitle}</p>
                <input ref = {nameRef} type="text" name="name" id=""  placeholder='task - 1'/>
                <br />
                <input ref = {emailRef} type="email" name="email" id="" />
                <br />
                <input ref = {passwordRef} type="password" name="password" id="" />
                <br />
                <input type="submit" value= {submitBtn} />
            </form>
        </div>
    );
};

export default ReUsableForm2;