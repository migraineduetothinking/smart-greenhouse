import React, { useState } from 'react';
import Chart from '../functions/Chart';
import Header from './Header';
import './style.css';
import ExcelReader from '../functions/ExcelReader';

const HumidityPage = () => {
  

  return (
    <div>
      <Header title="Вологість" />
      <ExcelReader sheetName="Humidity" />
      {/* <Chart category="Вологість" startDate={startDate} endDate={endDate} /> */}

    </div>
  );
};

export default HumidityPage;