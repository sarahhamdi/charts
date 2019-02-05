import React from 'react';
import Dashboard from './components/Dashboard/Dashboard'
import './App.scss';

import GraphContext, { GraphContext as StateType } from './Context'

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 }
]

class App extends React.Component {
  state: StateType = {
    color1: '#F0C22A',
    color2: '#E69266',
    dataBar: data,
    dataLine: data,
    dataPie: data01
  }

  render() {
    return (
      <GraphContext.Provider value={this.state}>
        <Dashboard />
      </GraphContext.Provider>
    );
  }
}

export default App;
