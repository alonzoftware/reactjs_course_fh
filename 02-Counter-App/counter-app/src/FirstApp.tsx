import { Fragment } from "react"
const newMessage = {
    msg: "This the Message",
    from: "Fernando",
}
const getNotAsyncFunction = (a: number, b: number) => {
    return a + b;
}
export const FirstApp = () => {
    return (
        <>
            <h1>First App</h1>
            <p>Soy un Subtitulo</p>
            <code>{JSON.stringify(newMessage)}</code>
            <p>{getNotAsyncFunction(1, 8)}</p>
        </>
    )
}
export const FirstAppFragment = () => {
    return (
        <Fragment>
            <h1>First App</h1>
            <p>Soy un Subtitulo</p>
        </Fragment>
    )
}