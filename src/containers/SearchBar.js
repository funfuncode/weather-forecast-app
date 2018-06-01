import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);

    this.state = {
      searchterm: ''
    }
  }

  inputChangeHandler(e){
    this.setState( { searchterm: e.target.value } );
  }

  submitHandler(e){
    e.preventDefault();
    this.props.onSubmit(this.state.searchterm);
    this.setState( { searchterm: '' } );
  }

  render(){
    return (
      <form className="input-group my-4" onSubmit={this.submitHandler}>
        <input className="form-control" type="text" placeholder="get a 5-day weather forecast in your city"
          value={this.state.searchterm}
          onChange={this.inputChangeHandler} />
        <button type="submit" className="btn btn-secondary ml-3">Search</button>
      </form>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (city) => dispatch(fetchWeather(city))
  }
}

export default connect(null, mapDispatchToProps)(SearchBar);
