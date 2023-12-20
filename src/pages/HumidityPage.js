import React, { useState } from 'react';
import Chart from '../functions/Chart';
import Header from './Header';
import './style.css';
import DBReader from '../functions/DBReader';

const HumidityPage = () => {
  

  return (
    <div>
      <Header title="Вологість" />
      <DBReader tableName="Humidity" />
      {/* <Chart category="Вологість" startDate={startDate} endDate={endDate} /> */}

    </div>
  );
};

export default HumidityPage;