import { useEffect } from "react"
import { iImg, iGiphyResponse } from "../helpers/get-gifs"
import { useFetchGifs } from "../hooks/use-fetch-gifs"
import { GifItem } from "./GifItem";

export const GifGrid = ({ category = "" }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>
                {category}
            </h3>

            {isLoading && (<h2>Cargando gifs .....</h2>)}
            <div className="cad-grid">
                {images.map((image: iImg) =>
                    <GifItem key={image.id} {...image} />
                )}

            </div>
        </>

    )
}