import Friend from "../Friend/Friend";

const Cousin = ({name}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <section>
                <p>{name}</p>
                {
                    name==='jami' && <Friend></Friend>
                }
            </section>
        </div>
    );
};

export default Cousin;