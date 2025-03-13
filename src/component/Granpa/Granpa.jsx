import React, { createContext } from 'react';
import Dad from '../Dad/Dad';

const AssetContext = createContext("Gold") 

const Granpa = () => {

    const asset = "Diamond";

    return (
        <div>
            <h2>Grandpa Component</h2>
            <AssetContext.Provider value='Gold'>
                <section>
                    <Dad></Dad>
                </section>
            </AssetContext.Provider>
        </div>
    );
};

export default Granpa;