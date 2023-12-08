import React from 'react';
import Sensor from './Sensor';
import Header from './Header';
import './style.css';

const HumidityPage = () => {
    return (
    <div>
      <Header title="Вологість" />
      <Sensor category="Вологість" />;
    </div>
  );
};

export default HumidityPage;