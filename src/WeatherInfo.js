import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-4 mt-3">
          <ul>
            <li>
              <h2>{props.data.city}</h2>
            </li>
            <li>(updated on)</li>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
          </ul>
        </div>
        <div className="col-4">
          <ul>
            <li className="text-capitalize mt-4">
              <WeatherIcon
                code={props.data.icon}
                size={84}
                alt="props.data.description"
              />
            </li>
            <li>
              <span>Humidity: </span>
              <span>{props.data.humidity}</span>
              <span>%</span>
            </li>
            <li>
              <span>Wind: </span>
              <span>{Math.round(props.data.wind)}</span>
              <span> km/h</span>
            </li>
          </ul>
        </div>
        <div className="col-4 mt-4">
          <ul className="temperature-style">
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
