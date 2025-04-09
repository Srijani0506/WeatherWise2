import React, { useState } from "react";
import axios from "axios";
import "./Dashboard.css";
import Compass from "../../assets/compass.png";
import Drops from "../../assets/drops.png";
import Ultraviolet from "../../assets/ultraviolet.png";
import { IoLocationOutline, IoSearchOutline, IoCalendarOutline, IoNotificationsOutline } from "react-icons/io5";

const API_KEY = "3e56e767dec876fd8527bd2fbbf74c4c"; 

const Dashboard = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    const trimmedCity = city.trim();
    if (!trimmedCity) {
      setError("Please enter a valid city name.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${trimmedCity}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (err) {
      setError("City not found. Please try again.");
      setWeather(null);
    }

    setLoading(false);
  };

  return (
    <section className="dashboard-section">
      <div className="header-section">
        <div className="location">
          <IoLocationOutline size={20} />
          <span>{weather ? `${weather.name}, ${weather.sys.country}` : "Search for a city"}</span>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="search-input"
          />
          <button onClick={fetchWeather} className="search-btn">
            <IoSearchOutline size={20} />
          </button>
        </div>

        <div className="icons">
          <IoCalendarOutline size={20} />
          <IoNotificationsOutline size={20} />
        </div>
      </div>

      {error && <p className="error">{error}</p>}

      {weather && !error && (
        <div className="weather-card">
          <div className="weather-info">
            <h2>{weather.name}, {weather.sys.country}</h2>
            <p>{weather.weather[0].description.toUpperCase()}</p>
            <img
              src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              alt="Weather Icon"
            />
            <p className="temp">{weather.main.temp}°C</p>
          </div>

          <div className="highlights">
            <h3>Today's Highlights</h3>
            <div className="highlight-grid">
              <div className="highlight-box">
                <img src={Compass} alt="Feels Like" />
                <p>Feels Like</p>
                <span>{weather.main.feels_like}°C</span>
              </div>
              <div className="highlight-box">
                <img src={Drops} alt="Humidity" />
                <p>Humidity</p>
                <span>{weather.main.humidity}%</span>
              </div>
              <div className="highlight-box">
                <img src={Ultraviolet} alt="Wind Speed" />
                <p>Wind</p>
                <span>{weather.wind.speed} km/h</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Dashboard;
