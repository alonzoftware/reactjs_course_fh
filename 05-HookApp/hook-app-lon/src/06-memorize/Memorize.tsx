import { useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";

export const Memorize = () => {
    const [show, setShow] = useState(true);
    const { counter, increment } = useCounter(10);

    return (
        <>
            <h1>Counter : <Small value={counter} /></h1>
            <button
                className="btn btn-primary mt-2"
                onClick={(event) => increment(1)}
            >+1</button>
            <button
                className="btn btn-outline-primary mt-2"
                onClick={(event) => setShow(!show)}


            >Show/Hide {JSON.stringify(show)}</button>


        </>

    )
}
