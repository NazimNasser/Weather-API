import React, { Component } from 'react'
import snow from "../img/weather-icons/snow.svg";
export class DailyWeather extends Component {
    render() {
        return (
            <div className="item">
                <time>03:00</time>
                <img src={snow} alt="img1"/>
                <p>8 &#176;C</p>
            </div>
        )
    }
}

export default DailyWeather

