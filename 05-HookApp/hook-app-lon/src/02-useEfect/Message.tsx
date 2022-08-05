import { useEffect, useState } from "react";

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });
    useEffect(() => {
        // console.log('Message Mounted');

        const onMouseMove = (event: MouseEvent) => {
            // const coords = { x: event.x, y: event.y };
            setCoords({ x: event.x, y: event.y });
            //console.log(coords);
        }
        window.addEventListener('mousemove', onMouseMove)
        return () => {
            // console.log('Message Unmounted');
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, []);
    return (
        <>

            <h3>User Exist !!</h3>
            {JSON.stringify(coords)}

        </>
    )
}
