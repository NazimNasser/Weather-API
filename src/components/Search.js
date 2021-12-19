import React from "react";

// import clear from ".5./img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
  state = {
    input: ""
  };

// import React, { Component } from 'react'

// export class Search extends Component {
  render() {
    return (
      <div className="container-input">
        <input type="text" placeholder="Type in a city name" onChange={event => {
            this.setState({ input: event.target.value });
          }}>
        </input>
        <button onClick={() => {this.props.handleInput(this.state.input);}}>
            FIND WEATHER
        </button>
      </div>
    )
  }
}

export default Search


