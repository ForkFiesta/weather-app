function getPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}
// results[0].components.city
async function getReverseLocation(latitude, longitude) {
  const URL = "https://api.opencagedata.com/geocode";
  const VERSION = "v1";
  const FORMAT = "json";
  const key = process.env.API_KEY;
  const q = `${latitude}+${longitude}`;
  //   console.log(`q is ${q}`);
  try {
    const response = await fetch(
      `${URL}/${VERSION}/${FORMAT}?key=${key}&q=${q}`
    );
    const data = await response.json();
    console.log(data);

    const zipcode = data.results[0].components.postcode;
    const city = data.results[0].components.city;
    const state = data.results[0].components.state;

    return {
      zipcode,
      city,
      state,
    };
  } catch (error) {
    console.error(error);
  }
}

async function getLocation(locationString) {
  const URL = "https://api.opencagedata.com/geocode";
  const VERSION = "v1";
  const FORMAT = "json";
  const key = process.env.API_KEY;
  const q = locationString;
  //   console.log(`q is ${q}`);
  try {
    const response = await fetch(
      `${URL}/${VERSION}/${FORMAT}?key=${key}&q=${q}`
    );
    const data = await response.json();
    const city = data.results[0].components.city;
    const zipcode = data.results[0].components.postcode;
    console.log(city, zipcode);
    return {
      city,
      zipcode,
    };
    // console.log(data);
  } catch (error) {
    console.error(error);
  }
}

async function showPosition(
  locationSearchType = "reverse",
  locationString = ""
) {
  if (locationSearchType == "reverse") {
    try {
      const position = await getPosition();
      const latitude = position.coords.latitude.toString();
      const longitude = position.coords.longitude.toString();
      const location = await getReverseLocation(latitude, longitude);
      return location;
    } catch (error) {
      console.error(error); // Handle any errors
    }
  } else {
    const location = await getLocation(locationString);
    return location;
  }
}

export { showPosition };
