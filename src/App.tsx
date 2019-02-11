import React from 'react';
import Dashboard from './components/Dashboard/Dashboard'
import './App.scss';

import GraphContext, { GraphContext as StateType } from './Context'
import { data, data01 } from './data/placeholder'

class App extends React.Component {
  state: StateType = {
    colors: ['#F0C22A', '#E69266'],
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
