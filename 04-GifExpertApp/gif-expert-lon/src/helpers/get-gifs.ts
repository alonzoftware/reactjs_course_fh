
export interface iGiphyResponse {
  id: number;
  title: string;
  images: { fixed_height: { url: string; }; };
}
export interface iImg {
  id: number;
  title: string;
  url: string;
}

export const getGifs = async (category = "") => {
  try {
    const apiKey = "8fz3CBmAE5Ypb44cP8sLmAkimv5r7Vt5";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`
    );
    const { data = [] } = await resp.json();
    // console.log(data);
    const images: iImg[] = data.map((img: iGiphyResponse) => ({
      id: img.id,
      title: img.title,
      url: img.images.fixed_height.url,
    }))

    return images;
  } catch (error) {
    // manejo del error
    console.error(error);
    return [];
  }
};
