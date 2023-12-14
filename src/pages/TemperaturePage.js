import React, { useState } from 'react';
import Chart from '../functions/Chart';
import Header from './Header';
import './style.css';
import ExcelReader from '../functions/ExcelReader';

const TemperaturePage = () => {

    
  return (
    <div>
      <Header title="Температура"  />
      <ExcelReader />
      {/* ///<Chart category="Температура" startDate={startDate} endDate={endDate}/> */}
    </div>
  );
};

export default TemperaturePage;