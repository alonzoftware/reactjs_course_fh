import { Fragment } from "react"
const newMessage = {
    msg: "This is the Message",
    from: "Fernando",
}
const getNotAsyncFunction = (a: number, b: number) => {
    return a + b;
}
export const FirstApp = ({ title = "", subTitle = 0 }) => {
    return (
        <>
            <h5>{title}</h5>
            <h5>{subTitle + 2}</h5>
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