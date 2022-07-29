export const getGifs = async (category = "") => {
  try {
    const apiKey = "8fz3CBmAE5Ypb44cP8sLmAkimv5r7Vt5";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`
    );


    const { data = [] } = await resp.json();
    interface iImg {
      id: number;
      title: string;
      images: { downsized_medium: { url: string; }; };
    }


    const gifs = data.map((img: iImg) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }))

    console.log(gifs);
  } catch (error) {
    // manejo del error
    console.error(error);
  }
};
