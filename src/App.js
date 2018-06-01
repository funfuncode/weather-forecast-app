import React, { Component } from 'react';
import SearchBar from './containers/SearchBar';
import WeatherList from './containers/WeatherList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />

        <div className="row">
          <WeatherList />
        </div>
      </div>
    );
  }
}

export default App;
