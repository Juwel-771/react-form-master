import React from 'react';

const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.fistName.value);
        console.log(e.target.lastName.value);
        console.log(e.target.age.value);
        // console.log("Form Submitted")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" />
                <br />
                <input type="email" name='email' />
                <br />
                <input type="text" name="fistName" id="" />
                <br />
                <input type="text" name="lastName" id="" />
                <br />
                <input type="number" name="age" id="" />
                <br />
                <input type="submit" value="Submit Data" />
            </form>
        </div>
    );
};

export default SimpleForm;