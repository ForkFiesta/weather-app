export async function getWeather(postcode) {
  const URL =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

  //   const date = new Date();
  //   const formattedDate = date.toLocaleDateString("en-US", {
  //     month: "2-digit",
  //     day: "2-digit",
  //     year: "numeric",
  //   });

  const API_KEY = "BAKHF97Q6T8SSZF3YWGTB3Y62";
  console.log(API_KEY);

  const location = 78041;

  try {
    const response = await fetch(`${URL}${location}?key=${API_KEY}`);

    const data = await response.json();

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date();
    // const dayOfWeek = days[date.getDay()]; // Maps the number to a day

    // console.log(dayOfWeek); // Output: the current day name, e.g., "Wednesday"

    const weatherArray = [];

    function createDaysForecast(index, weekday) {
      return {
        dayOfWeek: weekday,
        index: index,
        temperature: data.days[index].temp,
        precipitation: data.days[index].precipprob,
        description: data.days[index].description,
        conditions: data.days[index].conditions,
        humidity: data.days[index].humidity,
        windSpeed: data.days[index].windspeed,
      };
    }

    const dayIndexProcessing = (index) => {
      if (index > 6) {
        index = index - 7;
      }
      return index;
    };

    for (let i = 0; i < 5; i++) {
      //   console.log(days[date.getDay() + i]);
      let newDay = createDaysForecast(
        i,
        days[dayIndexProcessing(date.getDay() + i)]
      );
      weatherArray.push(newDay);
    }

    return weatherArray;
  } catch (error) {
    console.error(error);
  }
}

// days[0].cloudcover
