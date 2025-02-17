import { useState } from "react";

const StateForm = () => {

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState('')

    const submitHandel = e => {
        e.preventDefault()
        if (password.length < 6) {
            setError('Password Must be 6 character longer')
        }
        else{
            setError('')
        }
        console.log(name, email, password);
        
    }

    const onChangeName = e => {
        setName(e.target.value)
    }

    const onChangeEmail = e => {
        setEmail(e.target.value)
    }

    const onChangePassword = e => {
        setPassword(e.target.value)
    }

    return (
        <div>
            <form onSubmit={submitHandel}>
                <input 
                onChange={onChangeName}
                type="text" name="name"/>
                <br />
                <input 
                onChange={onChangeEmail}
                type="email" name="email"/>
                <br />
                <input 
                onChange={onChangePassword}
                type="password" name="password" required/>
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateForm;