import react from "react";
import FormattedDate from "./FormattedDate";

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
            <li className="text-capitalize">
              <img src={props.data.iconUrl} alt={props.data.description} />
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
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">
              <a href="https://lively-kataifi-5a4ec5.netlify.app">°C </a>|
              <a href="https://lively-kataifi-5a4ec5.netlify.app">°F </a>
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
}
