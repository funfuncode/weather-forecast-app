import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {

  render(){
    const tableData = this.props.weatherList.map( (weatherItem) => {
      const tempData = weatherItem.list.map( (item) => Number.parseInt(item.main.temp - 273.15) );
      const pressData = weatherItem.list.map( (item) => Number.parseInt(item.main.pressure));
      const humidData = weatherItem.list.map( (item) => Number.parseInt(item.main.humidity));
      const { lon, lat } = weatherItem.city.coord;
      console.log(tempData, pressData, humidData);
      return (
        <tr key={weatherItem.city.id}>
          <td><GoogleMap lat={lat} lon={lon}/></td>
          <td><Chart tempData={tempData} color="red" units="&#x2103;"/></td>
          <td><Chart pressData={pressData} color="blue" units="HPa"/></td>
          <td><Chart humidData={humidData} color="orange" units="%"/></td>
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
