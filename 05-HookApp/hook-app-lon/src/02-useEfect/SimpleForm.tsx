import { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'osolon',
        email: 'oso@osito.com'
    });
    const { username, email } = formState;

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value,
        })

    }

    // useEffect(() => {
    //     console.log('mount useEffect');
    // }, []);

    // useEffect(() => {
    //     console.log(formState);
    // }, [formState]);

    // useEffect(() => {
    //     console.log(email);
    // }, [email]);


    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input
                type="text"
                className='form-control'
                placeholder='Username'
                name='username'
                value={username}
                onChange={inputChange}
            />
            <input
                type="text"
                className='form-control mt-2'
                placeholder='alonzo@gmail.com'
                name='email'
                value={email}
                onChange={inputChange}
            />
            <br />
            {username === 'osolon2' && <Message />}
        </>
    );
}