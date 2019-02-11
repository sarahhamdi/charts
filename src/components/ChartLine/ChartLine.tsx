import React from 'react';
import GraphContext from '../../Context'
import { LineChart, Line, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';

const ChartLine = () => (
  <GraphContext.Consumer>
    {(value) => (
      <LineChart width={400} height={400} data={value.dataLine}>
        <Line type="monotone" dataKey="uv" stroke={value.colors[1]} />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
      </LineChart>
    )}
  </GraphContext.Consumer>
);

export default ChartLine;
