import { useRef } from "react";

export const FocusScreen = () => {
    const inputRef = useRef<HTMLInputElement>((<input />).type);
    const onClick = () => {
        // document.querySelector('input')?.select();
        // document.querySelector('input')?.focus();

        inputRef.current.select();

    }
    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <input type="text"
                ref={inputRef}
                placeholder="Your Name"
                className="form-control"
            />
            <button
                className="btn btn-primary mt-2"
                onClick={onClick}
            >Set Focus</button>
        </>
    )
}
