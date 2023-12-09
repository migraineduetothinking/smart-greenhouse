import React, { useState } from 'react';
import Chart from './Chart';
import Header from './Header';
import './style.css';

const TemperaturePage = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleDateChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div>
      <Header title="Температура" onDateChange={handleDateChange} />
      <Chart category="Температура" startDate={startDate} endDate={endDate} />

    </div>
  );
};

export default TemperaturePage;