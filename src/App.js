import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Warszawa" />
        <footer>
          <small>
            This project was coded by{" "}
            <a
              className="footer-link"
              href="https://www.linkedin.com/in/olena-myronenko-ua/"
              target="blank"
            >
              Olena Myronenko
            </a>{" "}
            ans is{" "}
            <a
              className="footer-link"
              href="https://github.com/Olena-Myr/weather-react-app"
              target="blank"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              className="footer-link"
              href="https://lively-kataifi-5a4ec5.netlify.app/"
              target="blank"
            >
              hosted on Netlify
            </a>
            . <br />
            <a
              className="footer-link"
              href="https://www.freepik.com/free-vector/doodle-weather-set_2869795.htm"
              target="blank"
            >
              Designed by Freepik
            </a>
            .
          </small>
        </footer>
      </div>
    </div>
  );
}
