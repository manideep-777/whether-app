# Weather App

## Description
The Weather App is a web-based application that provides real-time weather information for any city entered by the user. It fetches data from a public weather API and displays key weather details such as temperature, weather conditions, and an icon representing the current weather.

## Technologies Used
- **React.js** – For building the user interface
- **Tailwind CSS** – For responsive and modern styling
- **Node.js** – For backend operations
- **Public Weather API (OpenWeatherMap)** – For fetching real-time weather data

## Features
- 🌍 Search for weather by city name
- ☀️ Displays temperature, weather condition, and an icon
- 🔄 Responsive design for mobile and desktop users
- 🛠 Error handling for invalid city input
- 🌡️ Unit conversion between Celsius and Fahrenheit (Optional)

## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up API key:**
   - Obtain an API key from [OpenWeatherMap](https://openweathermap.org/)
     ```env
     REACT_APP_WEATHER_API_KEY=your_api_key_here
     ```
4. **Run the application:**
   ```bash
   npm install
   npm run dev
   ```
5. **Open the app in your browser:**
   ```
   http://localhost:5173
   ```

## Usage
1. Enter a city name in the search box.
2. Click the **Search** button.
3. View real-time weather details, including temperature and conditions.

## Future Enhancements
- 🌎 Auto-detect user location for weather updates
- 🔔 Weather alerts and notifications
- 📅 7-day weather forecast feature

---
Made with ❤️ using React, Tailwind CSS, and Node.js.
