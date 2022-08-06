import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahi vamos');
    }
    return `${iterationNumber} Iteraciones Realizadas`;
}


export const MemoHook = () => {
    const [show, setShow] = useState(true);
    const { counter, increment } = useCounter(400);
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Counter : <small>counter</small></h1>
            <h3>{memorizedValue}</h3>
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
