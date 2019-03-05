import {
  LOAD_WEATHER_DATA_REQUEST,
  LOAD_WEATHER_DATA_SUCCESS,
  LOAD_WEATHER_DATA_ERROR,
} from '../types/weather';

export const loadWeatherData = ({ city, date }) => ({
  type: LOAD_WEATHER_DATA_REQUEST,
  payload: { city, date },
});

export const loadWeatherDataSuccess = data => ({
  type: LOAD_WEATHER_DATA_SUCCESS,
  payload: data,
});

export const loadWeatherDataError = error => ({
  type: LOAD_WEATHER_DATA_ERROR,
  payload: error,
});
