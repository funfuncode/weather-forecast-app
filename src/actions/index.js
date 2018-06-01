import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';

const API_KEY = '4d7ac6aec594215789641abbb9e0d5b7';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const fetchWeather = (city) => {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
