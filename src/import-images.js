// Assuming your images are in a folder called 'assets/images'

function importAllImages(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAllImages(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);

// Now you can access your images, e.g., images['my-image.png']
export { images };
