export const getImages = async (category = "") => {
  try {
    const apiKey = "8fz3CBmAE5Ypb44cP8sLmAkimv5r7Vt5";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
    return url;
  } catch (error) {
    // manejo del error
    console.error(error);
  }
};
