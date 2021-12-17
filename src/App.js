import React, { Component } from "react";
import Search from "./components/Search";
import WeatherItem from "./components/WeatherItem";
import DailyWeather from "./components/DailyWeather";
// import SayHi, { SayHello } from "./components/WeatherItem";
// import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Nazim"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">

        <header className="container-header">
            <Search/>
        </header>
        <div className="main-weather">
              <WeatherItem/>

            <div className="week-weather">
              <DailyWeather/>
              <DailyWeather/>
              <DailyWeather/>
              <DailyWeather/>
              <DailyWeather/>
              <DailyWeather/>
              <DailyWeather/>
            </div>

          </div>
      </div>

    );
  }
}

export default App;
