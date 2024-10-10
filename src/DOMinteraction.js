import { showPosition } from "./get-location.js";
import { getWeather } from "./get-weather.js";

import { getImages } from "./unsplash-fetch.js";
import feather from "feather-icons";

//Style APP Components
const leftSide = document.querySelector(".left-side");

// Get modal elements
const modal = document.getElementById("locationModal");
const changeLocationButton = document.querySelector(".location-button");
const closeButton = document.querySelector(".close-button");
const locationForm = document.getElementById("locationForm");

// Today Weather Components
const todayName = document.querySelector(".date-dayName");
const todayDate = document.querySelector(".date-day");
const locationElement = document.querySelector(".location");
const weatherIcon = document.querySelector(".weather-icon");
const weatherTemp = document.querySelector(".weather-temp");
const weatherDesc = document.querySelector(".weather-dec");
const precipitation = document.querySelector("#preciprob");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#windSpeed");
const todayIcon = document.querySelector(".weather-icon");

export async function DOMinteractor() {
  const days = [
    {
      icon: document.querySelector("#dayOne>i"),
      text: document.querySelector("#dayOne>.day-name"),
      temp: document.querySelector("#dayOne>.day-temp"),
    },
    {
      icon: document.querySelector("#dayTwo>i"),
      text: document.querySelector("#dayTwo>.day-name"),
      temp: document.querySelector("#dayTwo>.day-temp"),
    },
    {
      icon: document.querySelector("#dayThree>i"),
      text: document.querySelector("#dayThree>.day-name"),
      temp: document.querySelector("#dayThree>.day-temp"),
    },
    {
      icon: document.querySelector("#dayFour>i"),
      text: document.querySelector("#dayFour>.day-name"),
      temp: document.querySelector("#dayFour>.day-temp"),
    },
  ];

  // Open the modal when the button is clicked
  changeLocationButton.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close the modal if user clicks outside of it
  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  locationForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent form from submitting in the traditional way
    const city = document.querySelector("#newLocation").value;
    const userLocation = await updateLocation(city);
    if (userLocation && userLocation.city) {
      await updateWeather(userLocation.zipcode, userLocation.city);
      modal.style.display = "none";
    }
    // Call the function to update weather with the new postcode
    // Ensure updateWeather is accessible here

    // Close the modal after submission
  });

  // Function to update the location
  const updateLocation = async (locationString) => {
    try {
      const userLocation = locationString
        ? await showPosition("normal", locationString)
        : await showPosition();

      locationElement.innerHTML = userLocation.city;
      const photo = await getImages(userLocation.city);
      leftSide.style.backgroundImage = `url("${photo.rawImageUrl}")`;
      return userLocation;
    } catch (error) {
      console.error("Error getting user location:", error);
    }
  };

  // Function to update the weather
  // Function to update the weather
  const updateWeather = async (zipcode = "", city = "") => {
    try {
      const weatherArray = await getWeather(zipcode, city);
      if (weatherArray && weatherArray.length > 0) {
        console.log(weatherArray);
        todayName.innerHTML = weatherArray[0].dayOfWeek;
        todayDate.innerHTML = new Date().toLocaleDateString();
        weatherTemp.innerHTML = weatherArray[0].temperature;
        weatherDesc.innerHTML = weatherArray[0].conditions;
        precipitation.innerHTML = `${weatherArray[0].precipitation} %`;
        humidity.innerHTML = `${weatherArray[0].humidity} %`;
        windSpeed.innerHTML = `${weatherArray[0].windSpeed} MPH`;

        todayIcon.removeAttribute("data-feather");
        todayIcon.setAttribute("data-feather", weatherArray[0].icon);

        days.forEach((day, index) => {
          day.icon.removeAttribute("data-feather");
          day.icon.setAttribute("data-feather", weatherArray[index + 1].icon);
          day.text.innerHTML = weatherArray[index + 1].dayOfWeek.slice(0, 3);
          day.temp.innerHTML = weatherArray[index + 1].temperature;
        });

        // Add the timeout here so it applies on every weather update
        feather.replace();
      }
    } catch (error) {
      console.error("Error getting weather:", error);
    }
  };

  // Get the user's location and update the weather based on that
  const userLocation = await updateLocation();
  if (userLocation && userLocation.zipcode) {
    await updateWeather(userLocation.zipcode);
  } else {
    console.error("Could not retrieve the user's zipcode for weather update.");
  }
}
