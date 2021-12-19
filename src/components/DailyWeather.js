import React, { Component } from 'react'
import snow from "../img/weather-icons/snow.svg";
export class DailyWeather extends Component {
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
            <div className="item">
                <time>{this.props.dt_txt}</time>
                <img src={require(`../img/weather-icons/${this.getWeatherIcon(this.props.iconId)}.svg`)} alt="img1"/>
                <p>{this.props.temp} &#176;C</p>
            </div>
        )
    }
}

export default DailyWeather

