
const Form = () => {

    const submitHandel = e => {
        e.preventDefault()
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log('from submitted');
        
    }

    return (
        <div>
            <form onSubmit={submitHandel}>
                <input type="text" name="name"/>
                <br />
                <input type="email" name="email"/>
                <br />
                <input type="text" name="phone"/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Form;