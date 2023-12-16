// TemperaturePage.js
import React from 'react';
import Header from './Header';
import ExcelReader from '../functions/ExcelReader';

const TemperaturePage = () => {
  return (
    <div>
      <Header title="Температура" />
      <ExcelReader sheetName="Temperature" />
    </div>
  );
};

export default TemperaturePage;
