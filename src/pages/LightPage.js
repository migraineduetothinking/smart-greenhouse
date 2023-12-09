import React from 'react';
import Chart from './Chart';
import Header from './Header';
import './style.css';

const LightPage = () => {
  return (
    <div>
      <Header title="Рівент освітлення" />
      <Chart category="Рівень освітлення" />;
    </div>
  );
 
};

export default LightPage;