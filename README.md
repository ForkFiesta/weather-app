Here’s the updated `README.md` to include the design credit and license:

---

# Raul's Weather Report

Raul's Weather Report is a web application that provides weather updates and visual backgrounds based on the user's location. The app uses the Visual Crossing Weather API to fetch weather data, the Unsplash API to source background images, and geolocation services for location detection.

## Features

- **Real-time Weather Updates:** Get the current weather, humidity, wind speed, and precipitation probability.
- **Weekly Forecast:** A detailed five-day forecast with easy navigation between days.
- **Dynamic Backgrounds:** Unsplash images are used to provide a visually appealing background that matches the current weather.
- **Location Services:** Automatically fetches the user's location and provides weather details. Users can also manually input a location.
- **Interactive Design:** The UI includes a responsive layout with gradient effects, modal pop-ups, and hover effects for a dynamic user experience.

## Technologies Used

- **JavaScript**: Core logic for handling API requests, geolocation, and DOM manipulation.
- **HTML/CSS**: The structure and styling for a responsive and aesthetically pleasing UI.
- **APIs**:
  - [Visual Crossing Weather API](https://www.visualcrossing.com/): Provides weather data.
  - [Unsplash API](https://unsplash.com/developers): Provides city-specific background images.
  - [OpenCage Geocoding API](https://opencagedata.com/): Converts latitude and longitude to city names and vice versa.

## Setup

To run this project locally, follow these steps:

### Prerequisites

- Node.js and npm installed on your local machine
- Clone the repository
  ```bash
  git clone https://github.com/yourusername/rauls-weather-report.git
  cd rauls-weather-report
  ```

### Install Dependencies

- Install all required packages by running:
  ```bash
  npm install
  ```

### Environment Variables

- Create a `.env` file in the root directory and add your API keys:
  ```
  API_KEY=YOUR_OPENCAGE_API_KEY
  VC_API_KEY=YOUR_VISUAL_CROSSING_API_KEY
  UNSPLASH_KEY=YOUR_UNSPLASH_API_KEY
  ```

### Running the Application

- Start the local server by running:
  ```bash
  npm start
  ```
- Open `http://localhost:3000` in your browser to view the application.

## File Structure

- **index.html**: Contains the basic HTML structure for the application, including containers for displaying the weather details, modal forms, and interactive buttons.
- **style.css**: CSS for styling the layout, gradients, and animations. The design uses the Montserrat font, various color schemes, and flexbox for layout.
- **import-images.js**: Dynamically imports all images from the assets folder.
- **unsplash-fetch.js**: Fetches images from Unsplash based on the current city.
- **get-location.js**: Fetches the user’s current location based on the latitude and longitude or processes a manually inputted location.
- **get-weather.js**: Calls the Visual Crossing Weather API to retrieve weather data for the specified location.
- **DOMinteraction.js**: Handles the core UI interactions, including modal pop-ups, dynamic updates to weather data, and background image changes.
- **index.js**: Main JavaScript file that imports dependencies and calls the primary interaction functions.

## Usage

1. **Accessing Weather Data**:
   - On page load, the app will attempt to fetch the user’s current location using the browser’s geolocation API.
   - The weather details are displayed on the left side of the page.
2. **Weekly Forecast**:
   - The five-day weather forecast is shown on the right side. Users can click on each day to view its details.
3. **Changing Location**:
   - Click the "Change Location" button to open a modal where you can enter a new location. Once updated, the app will fetch and display the new location’s weather.
4. **Dynamic Backgrounds**:
   - The app fetches a relevant background image from Unsplash for the selected city.

## Design Credit

The HTML structure and styling for the application were inspired by the work of [Colin Espinas](https://codepen.io/Call_in/pen/pMYGbZ). We would like to acknowledge and thank him for sharing his design.

## License

This project is licensed under the MIT License.

### Design License

```
Copyright (c) 2024 by Colin Espinas (https://codepen.io/Call_in/pen/pMYGbZ)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

## Acknowledgments

- [Unsplash](https://unsplash.com/)
- [Visual Crossing](https://www.visualcrossing.com/)
- [OpenCage Geocoding](https://opencagedata.com/)
