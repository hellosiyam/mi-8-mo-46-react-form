
import Cousin from "../Cousin/Cousin";


const Aunt = () => {
    return (
        <div>
            <h2>Aunt</h2>
            <section className="flex">
                <Cousin name={'july'}></Cousin>
                <Cousin name={'jami'}></Cousin>
            </section>
            
        </div>
    );
};

export default Aunt;