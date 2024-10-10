import { images } from "./import-images";

export async function getWeather(postcode, city = "") {
  const URL =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

  const API_KEY = "BAKHF97Q6T8SSZF3YWGTB3Y62";
  console.log(API_KEY);
  const location = city || postcode;

  try {
    const completeURL = `${URL}${location}?key=${API_KEY}&iconSet=icons1`;
    console.log(`Fetching ${completeURL}`);
    const response = await fetch(completeURL);
    const data = await response.json();
    console.log(data);

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    // Icon mapping
    const iconMap = {
      snow: "cloud-snow",
      rain: "cloud-rain",
      fog: "cloud",
      wind: "wind",
      cloudy: "cloud",
      "partly-cloudy-day": "cloud",
      "partly-cloudy-night": "cloud",
      "clear-day": "sun",
      "clear-night": "moon",
    };

    const weatherArray = [];

    // Function to create forecast object for each day
    function createDaysForecast(index, weekday) {
      const dayData = data.days[index];
      return {
        dayOfWeek: weekday,
        temperature: dayData.temp,
        precipitation: dayData.precipprob,
        description: dayData.description,
        conditions: dayData.conditions,
        humidity: dayData.humidity,
        windSpeed: dayData.windspeed,
        icon: dayData.icon, // Map the icon directly here
        url: images[`${dayData.icom}.png`],
      };
    }

    // Ensure days wrap correctly and add to weatherArray
    const todayIndex = new Date().getDay();
    for (let i = 0; i < 5; i++) {
      const dayIndex = (todayIndex + i) % 7; // Wrap around the days of the week
      const weekday = daysOfWeek[dayIndex];
      const newDay = createDaysForecast(i, weekday);
      weatherArray.push(newDay);
    }

    return weatherArray;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
