import { useState } from 'react'

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'osolon',
        email: 'oso@osito.com'
    });
    const { username, email } = formState;

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        const { name, value } = target;
        console.log(name, value);



    }

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
        </>
    );
}