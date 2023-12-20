import React, { useState } from 'react';
import Chart from '../functions/Chart';
import Header from './Header';
import './style.css';
import DBReader from '../functions/DBReader';

const LightPage = () => {
  
  return (
    <div>
      <Header title="Рівень Освітлення"  />
      <DBReader tableName="light_level" />
      {/* <Chart category="Рівень Освітлення" startDate={startDate} endDate={endDate} /> */}

    </div>
  );
 
};

export default LightPage;