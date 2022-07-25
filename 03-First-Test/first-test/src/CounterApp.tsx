
import { useState } from "react";

export const CounterApp = ({ value = 0 }) => {
    const [counter, setCounter] = useState(value);
    const handleButtonAdd = () => {
        // setCounter(counter + 1);
        setCounter((c) => c + 1);
    }
    const handleButtonSubstract = () => {
        setCounter(counter - 1);
    }
    const handleButtonReset = () => {
        setCounter(value);
    }
    return (
        <>
            <h1>Counter App</h1>
            <h5 id="lbl-result"> {counter} </h5>
            <button onClick={handleButtonAdd}> +1 </button>
            <button onClick={handleButtonSubstract}> -1 </button>
            <button aria-label="btn-reset" onClick={handleButtonReset}> RESET </button>
        </>
    )
}
