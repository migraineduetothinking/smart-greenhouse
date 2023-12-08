import React from 'react';
import Sensor from './Sensor';
import Header from './Header';
import './style.css';

const TemperaturePage = () => {
  return (
    <div>
      <Header title="Температура" />
      <Sensor category="Температура" />
    </div>
  );
};

export default TemperaturePage;