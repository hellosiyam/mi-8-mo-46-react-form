import Spacial from "../Spacial/Spacial";

const MySelf = ({asset}) => {
    return (
        <div>
            <h2>MySelf</h2>
            <section className="flex">
                <Spacial asset={asset}></Spacial>
            </section>
        </div>
    );
};

export default MySelf;