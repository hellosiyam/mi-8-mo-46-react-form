import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const Friend = () => {

    const gift = useContext(AssetContext)
    return (
        <div>
            <h3>Friend</h3>
            <section>
                <p>has: {gift}</p>
            </section>
        </div>
    );
};

export default Friend;