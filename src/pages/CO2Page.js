import React, { useState } from 'react';
import Chart from '../functions/Chart';
import Header from './Header';
import './style.css';
import DBReader from '../functions/DBReader';

const CO2Page = () => {
  

  return (
    <div>
      <Header title="Рівень СО2" />
      <DBReader tableName="co2_level" />
      {/* <Chart category="Вологість" startDate={startDate} endDate={endDate} /> */}

    </div>
  );
 
};

export default CO2Page;