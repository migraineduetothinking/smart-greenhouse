import React from 'react';
import Chart from './Chart';
import Header from './Header';
import './style.css';

const HumidityPage = () => {
    return (
    <div>
      <Header title="Вологість" />
      <Chart category="Вологість" />;
    </div>
  );
};

export default HumidityPage;