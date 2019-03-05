import React from 'react';
import { SimpleLineChart } from '..';
import {
  shape, arrayOf, number, string,
} from 'prop-types';

import css from './style.css';

const WeatherChart = ({
  city,
  list,
}) => (
  <div className={css.wrapper}>
    <h2>{city.name}</h2>
    <SimpleLineChart data={list} yAxisKey="temperature" xAxisKey="date" />
  </div>
);

WeatherChart.propTypes = {
  city: shape({
    name: string.isRequired,
  }).isRequired,
  list: arrayOf(shape({
    temperature: number.isRequired,
    date: string.isRequired,
  })).isRequired,
};

export default WeatherChart;
