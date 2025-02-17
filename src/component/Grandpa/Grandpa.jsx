import { createContext, useState } from "react";
import Aunt from "../Aunt/Aunt";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';


export const AssetContext = createContext('Gold')
export const MoneyContext = createContext('1000')

const Grandpa = () => {
    const [money, setMoney] = useState(1000)
    const asset = "Diamond"

    return (
        <div className="grandpa">
            <h1>GrandPa</h1>
            <p>Money : {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
            <AssetContext.Provider value="Gold">
                <section className="flex">
                    <Dad asset={asset}></Dad>
                    <Uncle></Uncle>
                    <Aunt></Aunt>
                </section>
            </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;