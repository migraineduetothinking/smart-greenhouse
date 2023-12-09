import React from 'react';
import Chart from './Chart';
import Header from './Header';
import './style.css';

const CO2Page = () => {
  return (
    <div>
      <Header title="Рівень СО2" />
      <Chart category="Рівень СО2" />;
    </div>
  );
 
};

export default CO2Page;