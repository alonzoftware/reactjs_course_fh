import { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm';

interface iFormState {
    user: string,
    email: string,
    pass: string,
}

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm } = useForm({
        user: '', email: '', pass: ''
    })

    const { user, email, pass } = formState as iFormState;
    // useEffect(() => {
    //     console.log('mount useEffect');
    // }, []);

    // useEffect(() => {
    //     console.log(formState);
    // }, [formState]);

    // useEffect(() => {
    //     console.log('Email: ', email);
    // }, [email]);


    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input
                type="text"
                className='form-control'
                placeholder='Username'
                name='user'
                value={user}
                onChange={onInputChange}
            />
            <input
                type="text"
                className='form-control mt-2'
                placeholder='alonzo@gmail.com'
                name='email'
                value={email}
                onChange={onInputChange}
            />
            <input
                type="text"
                className='form-control mt-2'
                placeholder='your password'
                name='pass'
                value={pass}
                onChange={onInputChange}
            />
            <button className='btn btn-primary mt-2'
                onClick={onResetForm}
            >RESET</button>
        </>
    );
}