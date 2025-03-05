import { useState } from "react";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = "d174b434e1e61e93a252151ae4940f12"; 

  async function fetchWeather() {
    if (!city) return;
    setError(null);
    setWeather(null);
    
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      
      if (response.ok) {
        setWeather(data);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Failed to fetch weather data");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4 md:p-8 lg:p-12">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-4">Weather App</h1>
        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-grow p-2 border rounded w-full sm:w-auto"
          />
          <button
            onClick={fetchWeather}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full sm:w-auto"
          >
            Submit
          </button>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {weather && (
          <div className="text-center">
            <h2 className="text-xl font-semibold">{weather.name}, {weather.sys.country}</h2>
            <p className="text-lg">{weather.weather[0].description}</p>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
              className="mx-auto"
            />
            <p className="text-2xl font-bold">{weather.main.temp}°C</p>
          </div>
        )}
      </div>
    </div>
  );
}
