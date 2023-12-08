import React from 'react';
import Sensor from './Sensor';
import Header from './Header';
import './style.css';

const LightPage = () => {
  return (
    <div>
      <Header title="Рівент освітлення" />
      <Sensor category="Рівень освітлення" />;
    </div>
  );
 
};

export default LightPage;