import "./style.css";
import { showPosition } from "./get-location.js";
import { getWeather } from "./get-weather.js";
const feather = require("feather-icons");
feather.replace();

//Gets city and State from User

// async function logCity() {
//   try {
//     const location = await showPosition();
//     console.log(`Your location:\nZipcode:${location.zipcode}`);
//   } catch (error) {
//     console.error(error);
//   }
// }
// logCity();

async function logWeatherArray() {
  try {
    const myArray = await getWeather();
    myArray.forEach((day) => {
      console.log(
        day.dayOfWeek,
        day.conditions,
        day.description,
        day.temperature
      );
    });
  } catch (error) {
    console.error(error);
  }
}

logWeatherArray();
