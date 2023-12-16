import React, { useState } from 'react';
import Chart from '../functions/Chart';
import Header from './Header';
import './style.css';
import ExcelReader from '../functions/ExcelReader';

const CO2Page = () => {
  

  return (
    <div>
      <Header title="Рівень СО2" />
      <ExcelReader sheetName="CO2 level" />
      {/* <Chart category="Вологість" startDate={startDate} endDate={endDate} /> */}

    </div>
  );
 
};

export default CO2Page;