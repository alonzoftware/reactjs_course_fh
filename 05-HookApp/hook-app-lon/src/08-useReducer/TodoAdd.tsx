import { useState } from 'react'

export const TodoAdd = ({ onAddTodo }: { onAddTodo: Function }) => {

    const [inputValue, setInputValue] = useState('');
    const onInputChange = (value = "") => {
        setInputValue(value);
    }
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return
        // setCategory(category => [inputValue, ...category]);
        setInputValue("");
        onAddTodo(inputValue.trim());
    }

    return (
        <form onSubmit={event => onSubmit(event)} aria-label="formMain">
            <input
                type="text"
                placeholder='¿Que hay que hacer?'
                className='form-control'
                value={inputValue}
                onChange={event => onInputChange(event.target.value)}
            />

            <button
                type='submit'
                className='btn btn-outline-primary mt-3'
            >Agregar</button>



        </form>
    )
}
