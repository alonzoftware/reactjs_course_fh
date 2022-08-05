import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter(10)


    return (
        <>
            <h1>Counter  : {counter}</h1>
            <hr />
            <button className="btn btn-primary"
                onClick={() => increment(2)}>+1</button>
            <button className="btn btn-primary"
                onClick={reset}>RESET</button>
            <button className="btn btn-primary"
                onClick={(event) => decrement(2)}>-1</button>
        </>
    );
}
