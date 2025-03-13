import React, { useContext } from 'react';
import { AssetContext } from '../Granpa/Granpa';

const Friend = () => {

    const gift2 = useContext(AssetContext);

    return (
        <div>
            <h2>Friend Context</h2>
            <p> {gift2} </p>
        </div>
    );
};

export default Friend;