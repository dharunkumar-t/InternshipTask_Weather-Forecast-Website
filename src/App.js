import React, { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherList from "./components/WeatherList";
import "./styles.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (location) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=YOUR_API_KEY`
      );
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert(
        "Error fetching weather data. Please check the location and try again."
      );
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>Weather Forecast App</h1>
        <WeatherForm onSubmit={fetchWeather} />
      </header>
      <main>{weatherData && <WeatherList data={weatherData} />}</main>
      <footer>
        <div className="container">
          <p>&copy; 2024 Dharun Kumar T. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
