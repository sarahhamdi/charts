import React from 'react';
import GraphContext from '../../Context'
import { CartesianGrid, Legend, XAxis, YAxis, Tooltip, Bar, BarChart } from 'recharts';

const ChartBar = () => (
  <GraphContext.Consumer>
    {(value) => (
      <BarChart width={600} height={300} data={value.dataBar}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill={value.color1}/>
        <Bar dataKey="uv" fill={value.color2} />
      </BarChart>
    )}
  </GraphContext.Consumer>
);

export default ChartBar;
