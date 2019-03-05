import apiCall from '../services/apiCall';

export const fetchWeatherData = (options = {}) => apiCall.get('weather/yesterday', options);
