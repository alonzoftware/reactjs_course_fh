//import fetch from 'cross-fetch';
import 'cross-fetch/polyfill';

export const getImagen = async () => {

    try {
        const apiKey = '8fz3CBmAE5Ypb44cP8sLmAkimv5r7Vt5';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        return url;

    } catch (error) {
        // manejo del error
        console.error(error)
    }

}



