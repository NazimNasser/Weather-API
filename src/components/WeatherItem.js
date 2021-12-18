import React, { Component } from 'react'
import snow from "../img/weather-icons/snow.svg";
export class WeatherItem extends Component {
  render() {
    return (
      <div className="weather-today">
        <img src={snow} alt="cloud-img"/>
        <p><span className="overcast">overcast clouds</span></p>
        <p><span className="spacing">Temperature</span> {this.props.minTemp}&#176; to {this.props.maxTemp}&#176; C</p>
        <p className="change-sizing"><span>Humidity</span> {this.props.humidity}% <span>Pressure</span> {this.props.Pressure}</p>
      </div>
    )
  }
}

export default WeatherItem

