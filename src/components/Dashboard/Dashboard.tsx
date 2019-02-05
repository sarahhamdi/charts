import React from 'react';
import ChartBar from '../ChartBar/ChartBar'
import ChartLine from '../ChartLine/ChartLine';
import ChartPie from '../ChartPie/ChartPie';
import ChartDonut from '../ChartDonut/ChartDonut';

class Dashboard extends React.Component {
  render() {
    return (
      <main>
        <ChartLine />
        <ChartBar />
        <ChartPie />
        <ChartDonut />
      </main>
    );
  }
}

export default Dashboard;
