import { useState, useEffect } from "react"
import { getGifs, iImg } from "../helpers/get-gifs"


export const useFetchGifs = (category: string) => {
    const [isLoading, setIsLoading] = useState(true);

    const initialValue: iImg[] = [];
    const [images, setImages] = useState(initialValue);
    const getImages = async () => {
        const newImages: iImg[] = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }

}