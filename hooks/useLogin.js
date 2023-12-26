import { useState, useEffect } from 'react';
import { useMoralis } from "react-moralis"

const useLogin = () => {

    const [values, setValues] = useState({
        username: '',
        password: ''
    })
    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const { login, isAuthenticated, account, Moralis, authenticate } = useMoralis()

    const entrar = async (username, password) => {
        console.log(username, password)

        const user = new Moralis.User()
        user.set("username", values.username)
        user.set("password", values.password)

        try {
            await login(values.username, values.password)
            Moralis.User.enableUnsafeCurrentUser()
            const currentUser = Moralis.User.current();
            console.log(currentUser)

        } catch (error) {
            alert("Error: " + error.code + " " + error.message);
        }
    }

    return { handleChange, values, errors, entrar }

}

export default useLogin