function getPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function showPosition() {
  try {
    const position = await getPosition();
    const latitude = Number(position.coords.latitude);
    const longitude = Number(position.coords.longitude);
    const coordinates = [latitude, longitude];
    return coordinates;
  } catch (error) {
    console.error(error); // Handle any errors
  }
}

async function getLocation() {}

export { showPosition };
