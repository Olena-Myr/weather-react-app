import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, SetReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      wind: 6,
      city: response.data.name,
    });

    SetReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <h1>Weather Forecast</h1>

        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                autoFocus="on"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-secondary"
              />
            </div>
          </div>
        </form>

        <div className="row">
          <div className="col-4 mt-4">
            <ul>
              <li>
                <h2>{weatherData.city}</h2>
              </li>
              <li>
                <span>Monday</span>
                <span>12:00</span>
              </li>
              <li>April,07 2023</li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li>
                <img
                  src="http://openweathermap.org/img/wn/04d@2x.png"
                  alt="{weatherData.description}"
                />
              </li>
              <li>
                <span>Humidity:</span>
                <span>70</span>
                <span>%</span>
              </li>
              <li>
                <span>Wind:</span>
                <span>{weatherData.wind}</span>
                <span>km/h</span>
              </li>
            </ul>
          </div>
          <div className="col-4 mt-4">
            <ul className="temperature-style">
              <span className="temperature">
                {Math.round(weatherData.temperature)}{" "}
              </span>
              <span className="units">
                <a href="#">°C </a>|<a href="#">°F </a>
              </span>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "bd5b4461863eddaa6ced0a0a67989e0a";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
