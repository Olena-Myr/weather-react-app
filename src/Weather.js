import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Weather Forecast</h1>

      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              autofocus="on"
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
              <h2>Warszawa</h2>
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
              <img src="http://openweathermap.org/img/wn/04d@2x.png" />
            </li>
            <li>
              <span>Humidity:</span>
              <span>70</span>
              <span>%</span>
            </li>
            <li>
              <span>Wind:</span>
              <span>7</span>
              <span>km/h</span>
            </li>
          </ul>
        </div>
        <div className="col-4 mt-4">
          <ul className="temperature-style">
            <span className="temperature">15 </span>
            <span className="units">
              <a href="#">°C </a>|<a href="#">°F </a>
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
}
