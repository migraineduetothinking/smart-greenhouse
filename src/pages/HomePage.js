import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
 

  return (
    <div>
      
      <header>
        <h1>Smart-теплиця</h1>
      </header>
      
      <div className="button-container">
        <Link to="/temperature">
          <button>Температура</button>
        </Link>
        <Link to="/humidity">
          <button>Вологість</button>
        </Link>
        <Link to="/co2">
          <button>Рівень CO2</button>
        </Link>
        <Link to="/light">
          <button>Освітлення</button>
        </Link>
      </div>

    </div>
  );
};

export default HomePage;