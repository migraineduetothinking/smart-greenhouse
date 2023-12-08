import React from 'react';
import Sensor from './Sensor';
import Header from './Header';
import './style.css';

const CO2Page = () => {
  return (
    <div>
      <Header title="Рівень СО2" />
      <Sensor category="Рівень СО2" />;
    </div>
  );
 
};

export default CO2Page;