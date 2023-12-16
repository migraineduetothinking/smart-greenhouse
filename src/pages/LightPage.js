import React, { useState } from 'react';
import Chart from '../functions/Chart';
import Header from './Header';
import './style.css';
import ExcelReader from '../functions/ExcelReader';

const LightPage = () => {
  
  return (
    <div>
      <Header title="Рівень Освітлення"  />
      <ExcelReader sheetName="Light level" />
      {/* <Chart category="Рівень Освітлення" startDate={startDate} endDate={endDate} /> */}

    </div>
  );
 
};

export default LightPage;