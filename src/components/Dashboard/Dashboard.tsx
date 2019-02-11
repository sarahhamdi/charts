import React from 'react';
import ChartBar from '../ChartBar/ChartBar'
import ChartLine from '../ChartLine/ChartLine';
import ChartPie from '../ChartPie/ChartPie';
import ChartDonut from '../ChartDonut/ChartDonut';
import Form from '../Form/Form';

class Dashboard extends React.Component {
  render() {
    return (
      <main>
        <Form />
        <ChartLine />
        <ChartBar />
        <ChartPie />
        <ChartDonut />
      </main>
    );
  }
}

export default Dashboard;
