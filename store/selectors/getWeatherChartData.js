import { createSelector } from 'reselect';
import moment from 'moment';

const getCitiesData = store => store.cities.data;
const getWeatherData = store => store.weather.data;

export const getWeatherChartData = createSelector([
  getCitiesData,
  getWeatherData,
], (citiesData, weatherData) => {
  if (!citiesData || !weatherData) {
    return null;
  }

  return Object.values(citiesData)
    .map(city => ({
      city,
      list: weatherData[city._id].map(item => ({
        ...item,
        date: moment(item.date).format('H:mm:ss a'),
      })),
    }));
});
