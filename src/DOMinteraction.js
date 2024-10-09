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

const dayOnetext = document.querySelector("#dayOne>.day-name");
const dayOneTemp = document.querySelector("#dayOne>.day-temp");
const dayTwotext = document.querySelector("#dayTwo>.day-name");
const dayTwoTemp = document.querySelector("#dayTwo>.day-temp");
const dayThreetext = document.querySelector("#dayThree>.day-name");
const dayThreeTemp = document.querySelector("#dayThree>.day-temp");
const dayFourtext = document.querySelector("#dayFour>.day-name");
const dayFourTemp = document.querySelector("#dayFour>.day-temp");

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
        console.log(myArray);
        todayName.innerHTML = myArray[0].dayOfWeek;
        todayDate.innerHTML = new Date().toLocaleDateString();
        weatherTemp.innerHTML = myArray[0].temperature;
        weatherDesc.innerHTML = myArray[0].conditions;
        precipitation.innerHTML = myArray[0].precipitation + " %";
        humidity.innerHTML = myArray[0].humidity + " %";
        windSpeed.innerHTML = myArray[0].windSpeed + " MPH";

        dayOnetext.innerHTML = myArray[1].dayOfWeek.slice(0, 3);
        dayOneTemp.innerHTML = myArray[1].temperature;
        dayTwotext.innerHTML = myArray[2].dayOfWeek.slice(0, 3);
        dayTwoTemp.innerHTML = myArray[2].temperature;
        dayThreetext.innerHTML = myArray[3].dayOfWeek.slice(0, 3);
        dayThreeTemp.innerHTML = myArray[3].temperature;
        dayFourtext.innerHTML = myArray[4].dayOfWeek.slice(0, 3);
        dayFourTemp.innerHTML = myArray[4].temperature;
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
