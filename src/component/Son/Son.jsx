import React, { useContext } from 'react';
import { AssetContext } from '../Granpa/Granpa';


const Son = () => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Son Component</h2>
            <p>Your Gift: {gift} </p>   
        </div>
    );
};

export default Son; 