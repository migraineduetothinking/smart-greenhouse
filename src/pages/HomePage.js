import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { processExcelFile } from '../functions/DBReader';


const HomePage = ({ onFileUpload }) => {
  const fileInputRef = useRef(null);



  return (
    <div>
      <header>
        <h1>Smart-теплиця</h1>
      </header>

      <div className="button-container">
        <Link to="/temp">
          <button>Температура</button>
        </Link>
        <Link to="/hum">
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