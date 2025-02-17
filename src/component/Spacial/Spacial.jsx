import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Spacial = ({asset}) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h3>Spacial</h3>
            <section>
                <p>{asset}</p>
                <p>Also: {gift}</p>
            </section>
        </div>
    );
};

export default Spacial;