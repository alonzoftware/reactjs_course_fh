import { useState } from "react";

interface iProps {
    // setCategory: React.Dispatch<React.SetStateAction<string[]>>;
    onNewCategory(newCategory: string): void;
}
// export const AddCategory = ({ onNewCategory = (newCategory: string) => { } }) => {
export const AddCategory = (props: iProps) => {
    // const { setCategory} = props;
    const { onNewCategory } = props;
    const [inputValue, setInputValue] = useState('');
    const onInputChange = (value = "") => {
        setInputValue(value);
    }
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return
        // setCategory(category => [inputValue, ...category]);
        setInputValue("");
        onNewCategory(inputValue.trim());
    }
    return (
        <form onSubmit={event => onSubmit(event)} aria-label="formMain">

            <input
                type="text"
                placeholder="Your Anime"
                value={inputValue}
                onChange={event => onInputChange(event.target.value)}
            />
        </form>
    )
}

