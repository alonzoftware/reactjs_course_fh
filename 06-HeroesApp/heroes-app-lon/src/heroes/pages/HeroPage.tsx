import { useParams } from "react-router-dom"

export const HeroPage = () => {
    // const params = useParams();
    const { id, ...rest } = useParams();
    console.log(id, rest);
    return (
        <h1>HeroPage</h1>
    )
}
