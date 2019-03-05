import React from 'react';
import { string, arrayOf, object } from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const margins = {
  top: 5,
  right: 30,
  left: 20,
  bottom: 5,
};

const strokeColor = '#8884d8';

const SimpleLineChart = ({
  data,
  xAxisKey,
  yAxisKey,
}) => (
  <LineChart
    width={900}
    height={500}
    data={data}
    margin={margins}
  >
    <XAxis dataKey={xAxisKey} tick={{ textAnchor: 'start', dominantBaseline: 'ideographic' }} />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Legend verticalAlign="top" />
    <Line type="monotone" dataKey={yAxisKey} stroke={strokeColor} />
  </LineChart>
);

SimpleLineChart.propTypes = {
  data: arrayOf(object).isRequired,
  xAxisKey: string.isRequired,
  yAxisKey: string.isRequired,
};

export default SimpleLineChart;
