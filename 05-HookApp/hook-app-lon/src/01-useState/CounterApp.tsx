import { useState } from "react"

export const CounterApp = () => {
    // const [{ counter1, counter2, counter3 }, setCounter] = useState({
    //     counter1: 10,
    //     counter2: 20,
    //     counter3: 30,
    // });
    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });
    const { counter1, counter2, counter3 } = state;
    const addCounter = () => {
        // setCounter({
        //     counter1: counter1 +1,
        //     counter2: counter2,
        //     counter3: counter3,
        // });
        setCounter({
            ...state,
            counter1: counter1 + 1,
        });
    }

    return (
        <>
            <div>Counter 1 : {counter1}</div>
            <div>Counter 2 : {counter2}</div>
            <div>Counter 3 : {counter3}</div>
            <button className="btn"
                onClick={addCounter}>
                +1</button>

        </>
    );
}
