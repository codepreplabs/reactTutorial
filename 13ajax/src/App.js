import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  getCountries() {
    console.log("Inside get countries!");
    const axios = require('axios');
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(res => {
      console.log(res.data);
    })
  };

  toUpperCase(event) {
    console.log("Inside get countries!");
    const axios = require('axios');
    var body = {message:"lowercase to uppercase"};
    axios.get('http://test-routes.herokuapp.com/test/uppercase', body)
    .then(res => {
      console.log(res.data);
    })
  };

  render(){
    return (
      <div className="App">
        <button onClick={this.getCountries.bind(this)}>Get Countries</button>
        <button onClick={this.toUpperCase.bind(this)}>Post ConvertUppercase</button>
      </div>
    );
  }
}

export default App;
