import React, { createContext, useState } from 'react';
import Dad from '../Dad/Dad';
import Aunty from '../Aunty/Aunty';

export const AssetContext = createContext("Gold");
export const MoneyContext = createContext(1000);

const Granpa = () => {

    const [money, setMoney] = useState(1000);
    const asset = "Diamond";

    return (
        <div>
            <h2>Grandpa Component</h2>
            <h3>Net: {money} </h3>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value='Gold'>
                    <section>
                        <Dad> </Dad>
                        <Aunty></Aunty>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Granpa;