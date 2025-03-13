import React from 'react';

const ReUsableForm3 = ({formTitle, handleSubmit, submitBtn}) => {



    return (
        <div>
            <form>
                {formTitle}
                <br />
                <input type="text" name="name" id="" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value={submitBtn} />
            </form>
        </div>
    );
};

export default ReUsableForm3;