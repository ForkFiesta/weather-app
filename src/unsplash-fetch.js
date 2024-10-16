import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "BeCtr4jAMzU7734KCPJo-OjuO3nJSkWbH3Y5Rg9Qrns",
});

export async function getImages(city) {
  try {
    const result = await unsplash.search.getPhotos({
      query: `${city}`,
      page: 1,
      perPage: 10,
    });

    const photos = result.response.results;
    if (photos.length > 0) {
      const randomIndex = Math.floor(Math.random() * 10);
      console.log("Random Index: ", randomIndex);
      const photo = photos[randomIndex];
      const rawImageUrl = photo.urls.raw + "&auto=formate&fit=crop&w=675&q=80";
      const smallImageUrl = photo.urls.small;
      const regularImageUrl = photo.urls.regular;
      const fullImageUrl = photo.urls.full;

      return {
        rawImageUrl,
      };
    } else {
      console.log("No images found for this query.");
    }
  } catch (error) {
    console.error(error);
  }
}
