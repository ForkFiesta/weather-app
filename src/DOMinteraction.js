import { showPosition } from "./get-location.js";
import { getWeather } from "./get-weather.js";

const todayName = document.querySelector(".date-dayName");
const todayDate = document.querySelector(".date-day");
const locationElement = document.querySelector(".location");
const weatherIcon = document.querySelector(".weather-icon");
const weatherTemp = document.querySelector(".weather-temp");
const weatherDesc = document.querySelector(".weather-dec");
const precipitation = document.querySelector("#preciprob");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#windSpeed");

export async function DOMinteractor() {
  // Function to update the location
  const updateLocation = async () => {
    try {
      const userlocation = await showPosition(); // Await the result here
      locationElement.innerHTML = userlocation.city; // Access city after resolving
      return userlocation;
    } catch (error) {
      console.error("Error getting user location:", error);
    }
  };

  // Function to update the weather
  const updateWeather = async (zipcode) => {
    try {
      const myArray = await getWeather(zipcode); // Await the array here
      if (myArray && myArray.length > 0) {
        todayName.innerHTML = myArray[0].dayOfWeek;
        todayDate.innerHTML = new Date().toLocaleDateString();
        weatherTemp.innerHTML = myArray[0].temperature;
        weatherDesc.innerHTML = myArray[0].conditions;
        precipitation.innerHTML = myArray[0].precipitation + " %";
        humidity.innerHTML = myArray[0].humidity + " %";
        windSpeed.innerHTML = myArray[0].windSpeed + " MPH";
      }
    } catch (error) {
      console.error("Error getting weather:", error);
    }
  };

  // Get the user's location and update the weather based on that
  const userLocation = await updateLocation();
  if (userLocation && userLocation.zipcode) {
    updateWeather(userLocation.zipcode);
  } else {
    console.error("Could not retrieve the user's zipcode for weather update.");
  }
}
