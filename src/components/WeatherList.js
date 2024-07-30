import React from "react";
import WeatherCard from "./WeatherCard";

function WeatherList({ data }) {
  const weatherList = data.list.slice(0, 5).map((item) => ({
    date: new Date(item.dt_txt).toLocaleDateString(),
    temp: item.main.temp,
    description: item.weather[0].description,
  }));

  return (
    <div className="weather-list">
      {weatherList.map((weather, index) => (
        <WeatherCard
          key={index}
          date={weather.date}
          temp={weather.temp}
          description={weather.description}
        />
      ))}
    </div>
  );
}

export default WeatherList;
