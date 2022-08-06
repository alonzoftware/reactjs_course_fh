import React from "react";

interface iProp {
    increment: Function
}
export const ShowIncrement = React.memo(({ increment }: iProp) => {
    console.log('Reder Again');
    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                increment(5);
            }}
        >
            Incrementar
        </button>
    )
})
