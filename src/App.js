import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <footer>
        <small>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/olena-myronenko-ua/"
            target="blank"
          >
            Olena Myronenko
          </a>{" "}
          ans is{" "}
          <a
            href="https://github.com/Olena-Myr/weather-react-app"
            target="blank"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="https://lively-kataifi-5a4ec5.netlify.app/" target="blank">
            hosted on Netlify
          </a>
          .
        </small>
      </footer>
    </div>
  );
}
