import React from 'react';
import Dashboard from './components/Dashboard/Dashboard'
import './App.scss';

import GraphContext from './Context'

interface State {
  theme: string
}

class App extends React.Component {
  state: State = {
    theme: 'dark'
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
