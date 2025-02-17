import useInputState from "../../hooks/useInputState";

const HookForm = () => {

    // const [name, onChangeName] = useInputState('')
    const emailState = useInputState('')
    const submitHandel = e => {
       console.log('Name Change :', emailState.value);
       
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={submitHandel}>
                {/* <input value={name} onChange={onChangeName} type="text" name="name"/> */}
                <br />
                <input {...emailState} type="email" name="email"/>
                <br />
                <input type="text" name="phone"/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;