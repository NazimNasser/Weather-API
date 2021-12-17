import React, { Component } from "react";
import snow from "./img/weather-icons/snow.svg";
// import Search from "./components/Search";

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
          <div className="container-input">
            <input type="text" placeholder="Type in a city name">
            </input>
            <button>FIND WEATHER</button>
          </div>
        </header>
        <div className="main-weather">
            <div className="weather-today">
              <img src={snow} alt="cloud-img"/>
              <p><span className="overcast">overcast clouds</span></p>
              <p><span className="spacing">Temperature</span> 10&#176; to 11&#176; C</p>
              <p className="change-sizing"><span>Humidity</span> 78% <span>Pressure</span> 1008.48</p>
            </div>

            <div className="week-weather">
              <div className="item">
                <time>03:00</time>
                <img src={snow} alt="img1"/>
                <p>8 &#176;C</p>
              </div>

              <div className="item"> 
                <time>06:00</time>
                <img src={snow} alt="img2"/>
                <p>9 &#176;C</p>
              </div>

              <div className="item">
                <time>09:00</time>
                <img src={snow} alt="img3"/>
                <p>14 &#176;C</p>
              </div>

              <div className="item"> 
                <time>12:00</time>
                <img src={snow} alt="img4"/>
                <p>17 &#176;C</p>
              </div>

              <div className="item">
                <time>15:00</time>
                <img src={snow} alt="img5"/>
                <p>18 &#176;C</p>
              </div>

              <div className="item">
                <time>18:00</time>
                <img src={snow} alt="img6"/>
                <p>16 &#176;C</p>
              </div>

              <div className="item">
                <time>21:00</time>
                <img src={snow} alt="img7"/>
                <p>13 &#176;C</p>
              </div>
            </div>

          </div>
      </div>

    );
  }
}

export default App;
