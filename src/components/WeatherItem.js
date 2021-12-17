import React, { Component } from 'react'
import snow from "../img/weather-icons/snow.svg";
export class WeatherItem extends Component {
  render() {
    return (
      <div className="weather-today">
        <img src={snow} alt="cloud-img"/>
        <p><span className="overcast">overcast clouds</span></p>
        <p><span className="spacing">Temperature</span> 10&#176; to 11&#176; C</p>
        <p className="change-sizing"><span>Humidity</span> 78% <span>Pressure</span> 1008.48</p>
      </div>
    )
  }
}

export default WeatherItem

