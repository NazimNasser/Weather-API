import React, { Component } from 'react'
import snow from "../img/weather-icons/snow.svg";
export class WeatherItem extends Component {
  getWeatherIcon(id){
    if( id < 300 ){
      return "storm";
   } else if (id >= 300 && id <= 499){
     return "drizzle";
   } else if (id >= 500 && id <= 599){
     return "rain";
   } else if(id >= 600 && id <= 699){
    return "snow";
   } else if (id >= 700 && id <= 799){
     return "fog";
   } else if (id === 800){
     return "clear";
   } else if (id === 801){
     return "partlycloudy";
   } else if (id > 801 && id <= 805){
     return "mostlycloudy";
   }
  }
  render() {
    return (
      <div className="weather-today">
        <img src={require(`../img/weather-icons/${this.getWeatherIcon(this.props.iconId)}.svg`)} alt="cloud-img"/>
        <p><span className="overcast">overcast clouds</span></p>
        <p><span className="spacing">Temperature</span> {this.props.minTemp}&#176; to {this.props.maxTemp}&#176; C</p>
        <p className="change-sizing"><span>Humidity</span> {this.props.humidity}% <span>Pressure</span> {this.props.Pressure}</p>
      </div>
    )
  }
}

export default WeatherItem

