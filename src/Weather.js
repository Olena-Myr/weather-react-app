import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      city: response.data.name,
      iconUrl: "http://openweathermap.org/img/wn/04d@2x.png",
      //response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
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
                <FormattedDate date={weatherData.date} />
              </li>
              <li>April,07 2023</li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li className="text-capitalize">
                <img src={weatherData.iconUrl} alt={weatherData.description} />
              </li>
              <li>
                <span>Humidity: </span>
                <span>{weatherData.humidity}</span>
                <span>%</span>
              </li>
              <li>
                <span>Wind: </span>
                <span>{Math.round(weatherData.wind)}</span>
                <span>km/h</span>
              </li>
            </ul>
          </div>
          <div className="col-4 mt-4">
            <ul className="temperature-style">
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">
                <a href="#">°C </a>|<a href="#">°F </a>
              </span>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "bd5b4461863eddaa6ced0a0a67989e0a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
