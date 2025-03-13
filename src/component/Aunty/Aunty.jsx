import React, { useContext } from 'react';
import { MoneyContext } from '../Granpa/Granpa';

const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
           <p>Money: {money} </p> 
           <button onClick={()=>setMoney(money+1000)} >Add 1000</button>
        </div>
    );
};

export default Aunty;