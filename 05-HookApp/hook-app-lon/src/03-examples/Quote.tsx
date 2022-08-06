import { useLayoutEffect, useRef, useState } from "react";

interface iProps {
    quote: string,
    author: string,
}
export const Quote = ({ quote, author }: iProps) => {
    // const bRef = useRef<HTMLQuoteElement>((<blockquote />).type);
    const pRef = useRef<HTMLParagraphElement>((<p />).type);

    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
    useLayoutEffect(() => {
        const { width, height } = pRef.current.getBoundingClientRect();
        setBoxSize({ width, height });
    }, [quote])

    return (
        <>

            <blockquote
                className="blockquote text-end mt-2"
                style={{ display: 'flex' }}>
                <p className="mb-1" ref={pRef}> {quote}</p>
                <footer className="blockquote-footer mt-2">{author}</footer>
            </blockquote>
            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}
