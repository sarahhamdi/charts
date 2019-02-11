import React from 'react';
import GraphContext from '../../Context'
import { Tooltip, PieChart, Pie } from 'recharts';

const ChartPie = () => (
  <GraphContext.Consumer>
    {(value) => (
      <PieChart width={800} height={400}>
        <Pie dataKey='value' isAnimationActive={false} data={value.dataPie} cx={200} cy={200} outerRadius={80} fill={value.colors[1]} label />
        <Tooltip />
      </PieChart>
    )}
  </GraphContext.Consumer>
)

export default ChartPie;
