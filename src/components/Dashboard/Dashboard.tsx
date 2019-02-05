import React from 'react';
import GraphContext from '../../Context'

class Dashboard extends React.Component {
  render() {
    return (
      <Sidebar />
    );
  }
}

const Sidebar: React.SFC<{}> = () => {
  return (
    <GraphContext.Consumer>
      {(value) => <code>{value.theme}</code>}
    </GraphContext.Consumer>
  );
}


export default Dashboard;
