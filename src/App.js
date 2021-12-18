import React, { Component } from "react";
import Search from "./components/Search";
import WeatherItem from "./components/WeatherItem";
import DailyWeather from "./components/DailyWeather";
import FakeWeather from "./data/FakeWeather.json";
// import SayHi, { SayHello } from "./components/WeatherItem";
// import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
let celsius =(f)=>{return Math.round(f-273.15)};
let justTime =(t)=>{return t.split(" ")[1].substring(0,5)};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherList:FakeWeather["list"]
      
    };
  }

  handleInputChange = value => {
    this.setState({ weatherList: FakeWeather["list"] });
  };

  render() {
    return (
      <div className="app">

        <header className="container-header">
            <Search/>
        </header>
        <div className="main-weather">
              <WeatherItem
              humidity={this.state.weatherList[0].main.humidity}
              Pressure={this.state.weatherList[0].main.pressure}
              minTemp={celsius(this.state.weatherList[0].main.temp_min)}
              maxTemp={celsius(this.state.weatherList[0].main.temp_max)}
              />

            <div className="week-weather">
              <DailyWeather
              dt_txt={justTime(this.state.weatherList[1].dt_txt)}
              temp={celsius(this.state.weatherList[1].main.temp)}/>
              <DailyWeather
              dt_txt={justTime(this.state.weatherList[2].dt_txt)}
              temp={celsius(this.state.weatherList[2].main.temp)}/>
              <DailyWeather
              dt_txt={justTime(this.state.weatherList[3].dt_txt)}
              temp={celsius(this.state.weatherList[3].main.temp)}/>
              <DailyWeather
              dt_txt={justTime(this.state.weatherList[4].dt_txt)}
              temp={celsius(this.state.weatherList[4].main.temp)}/>
              <DailyWeather
              dt_txt={justTime(this.state.weatherList[5].dt_txt)}
              temp={celsius(this.state.weatherList[5].main.temp)}/>
              <DailyWeather
              dt_txt={justTime(this.state.weatherList[6].dt_txt)}
              temp={celsius(this.state.weatherList[6].main.temp)}/>
              <DailyWeather
              dt_txt={justTime(this.state.weatherList[7].dt_txt)}
              temp={celsius(this.state.weatherList[7].main.temp)}/>
            </div>

          </div>
      </div>

    );
  }
}

export default App;
