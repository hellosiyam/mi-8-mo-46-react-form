import { useEffect, useRef, useState } from "react";

const RefForm = () => {

    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    useEffect(() => {
        nameRef.current.focus()
    }, [])

    const [error, setError] = useState('')

    const submitHandel = (e) => {
        e.preventDefault();

        const password = passwordRef.current.value;

        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
        }
        else {
            setError("");
        }

        console.log("Name:", nameRef.current.value);
        console.log("Email:", emailRef.current.value);
        console.log("Password:", password);
    };

    return (
        <div>
            <form onSubmit={submitHandel}>
                <input ref={nameRef} type="text" name="name" />
                <br />
                <input ref={emailRef} type="email" name="email" />
                <br />
                <input ref={passwordRef} type="password" name="password" required/>
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default RefForm;