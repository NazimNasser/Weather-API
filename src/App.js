import React, { Component } from "react";
import Search from "./components/Search";
import WeatherItem from "./components/WeatherItem";
import DailyWeather from "./components/DailyWeather";
import FakeWeather from "./data/FakeWeather.json";
// import SayHi, { SayHello } from "./components/WeatherItem";
// import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
let celsius =(f)=>{return Math.round(f)};
let justTime =(t)=>{return t.split(" ")[1].substring(0,5)};
const API_Key = "145f2b3bf9cdedb06a0651de14dc1045";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherList:undefined,
      country:""
      
    };
  }

  getWeatherList= (country) =>{
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${country}&cnt=8&units=metric&appid=${API_Key}`)
    .then(res=> res.json())
    .then(data=>this.setState({weatherList:data.list}))
  }

  handleInputChange = value => {
    this.setState({ country: value });
    this.getWeatherList(value)
  };

  render() {
    if(this.state.country !=="" && this.state.weatherList !== undefined){
    return (
      <div className="app">

        <header className="container-header">
            <Search handleInput={this.handleInputChange}/>
        </header>
        <div className="main-weather">
              <WeatherItem
              humidity={this.state.weatherList[0].main.humidity}
              Pressure={this.state.weatherList[0].main.pressure}
              minTemp={celsius(this.state.weatherList[0].main.temp_min)}
              maxTemp={celsius(this.state.weatherList[0].main.temp_max)}
              iconId={this.state.weatherList[0].weather[0].id}
              sea={this.state.weatherList[0].main.sea_level}
              wind={this.state.weatherList[0].wind.speed}
              />

            <div className="week-weather">
              <DailyWeather
              dt_txt={justTime(this.state.weatherList[1].dt_txt)}
              temp={celsius(this.state.weatherList[1].main.temp)}
              iconId={this.state.weatherList[1].weather[0].id}/>
              <DailyWeather
              dt_txt={justTime(this.state.weatherList[2].dt_txt)}
              temp={celsius(this.state.weatherList[2].main.temp)}
              iconId={this.state.weatherList[2].weather[0].id}/>
              <DailyWeather
              dt_txt={justTime(this.state.weatherList[3].dt_txt)}
              temp={celsius(this.state.weatherList[3].main.temp)}
              iconId={this.state.weatherList[3].weather[0].id}/>
              <DailyWeather
              dt_txt={justTime(this.state.weatherList[4].dt_txt)}
              temp={celsius(this.state.weatherList[4].main.temp)}
              iconId={this.state.weatherList[4].weather[0].id}/>
              <DailyWeather
              dt_txt={justTime(this.state.weatherList[5].dt_txt)}
              temp={celsius(this.state.weatherList[5].main.temp)}
              iconId={this.state.weatherList[5].weather[0].id}/>
              <DailyWeather
              dt_txt={justTime(this.state.weatherList[6].dt_txt)}
              temp={celsius(this.state.weatherList[6].main.temp)}
              iconId={this.state.weatherList[6].weather[0].id}/>
              <DailyWeather
              dt_txt={justTime(this.state.weatherList[7].dt_txt)}
              temp={celsius(this.state.weatherList[7].main.temp)}
              iconId={this.state.weatherList[7].weather[0].id}/>
            </div>

          </div>
      </div>

    );}else{
      return (
      <div className="app">

        <header className="container-header">
            <Search handleInput={this.handleInputChange}/>
        </header>
      </div>)}
  }
}

export default App;
