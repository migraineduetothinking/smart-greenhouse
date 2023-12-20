// TemperaturePage.js
import React from 'react';
import Header from './Header';
import DBReader from '../functions/DBReader';

const TemperaturePage = () => {
  return (
    <div>
      <Header title="Температура" />
      <DBReader tableName="temperature" />
    </div>
  );
};

export default TemperaturePage;
