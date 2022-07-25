
export const newMessage = {
    msg: "This is the Message",
    from: "Fernando",
}
export const getNotAsyncFunction = (a = 0, b = 0) => {
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
