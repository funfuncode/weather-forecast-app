import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  render(){

    const tableData = this.props.weatherList.map( (weatherItem) => {
      return (
        <tr key={weatherItem.city.id}>
          <td>{weatherItem.city.name}</td>
          <td>{Number.parseInt(weatherItem.list[0].main.temp - 273.15)}&#8451;</td>
          <td>{Number.parseInt(weatherItem.list[0].main.pressure)}</td>
          <td>{weatherItem.list[0].main.humidity}%</td>
        </tr>
      );
    });

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>

        <tbody>
          {tableData}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weatherList: state.weather
  }
}

export default connect(mapStateToProps)(WeatherList);
