import React, { Component } from 'react'
import snow from "../img/weather-icons/snow.svg";
export class DailyWeather extends Component {

    render() {
        return (
            <div className="item">
                <time>{this.props.dt_txt}</time>
                <img src={snow} alt="img1"/>
                <p>{this.props.temp} &#176;C</p>
            </div>
        )
    }
}

export default DailyWeather

