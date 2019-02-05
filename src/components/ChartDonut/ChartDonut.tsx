import React from 'react';
import GraphContext from '../../Context'
import { Tooltip, PieChart, Pie } from 'recharts';

const ChartDonut = () => (
  <GraphContext.Consumer>
    {(value) => (
      <PieChart width={800} height={400}>
        <Pie dataKey='value' data={value.dataPie} cx={200} cy={200} innerRadius={40} outerRadius={80} fill={value.color2} />
        <Tooltip />
      </PieChart>
    )}
  </GraphContext.Consumer>
)

export default ChartDonut;
