import React from "react";

function WeatherCard({ date, temp, description }) {
  return (
    <div className="weather-card">
      <h3>{date}</h3>
      <p>{temp}°C</p>
      <p>{description}</p>
    </div>
  );
}

export default WeatherCard;
