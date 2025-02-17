
const ReusableForm = ({formTittle, submitHandel, submitBtnText = 'Submit'}) => {

    const localData = e => {
        e.preventDefault()
        const data = {
            name : e.target.name.value,
            email : e.target.email.value,
            password : e.target.password.value
        }
        submitHandel(data)
    }

    return (
        <div>
            <h1>{formTittle}</h1>
            <form onSubmit={localData}>
                <input type="text" name="name"/>
                <br />
                <input type="email" name="email"/>
                <br />
                <input type="password" name="password"/>
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReusableForm;