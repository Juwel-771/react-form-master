import React, { useRef } from 'react';

const ReUsableForm3 = ({formTitle, handleSubmit, submitBtn}) => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLocalSubmit = e => {
        e.preventDefault();

        const useData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        handleSubmit(`User Name: ${useData.name} \nUser Mail: ${useData.email} \nPasscode: ${useData.password}`);
    }

    return (
        <div>
            <form onSubmit={handleLocalSubmit}>
                {formTitle}
                <br />
                <input ref={nameRef} type="text" name="name" id="" />
                <br />
                <input ref={emailRef} type="email" name="email" id="" />
                <br />
                <input ref={passwordRef} type="password" name="password" id="" />
                <br />
                <input type="submit" value={submitBtn} />
            </form>
        </div>
    );
};

export default ReUsableForm3;