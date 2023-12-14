import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TemperaturePage from './pages/TemperaturePage';
import HumidityPage from './pages/HumidityPage';
import CO2Page from './pages/CO2Page';
import LightPage from './pages/LightPage';
;


const App = () => {
  return (
    
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/temperature" element={<TemperaturePage />} />
            <Route path="/humidity" element={<HumidityPage />} />
            <Route path="/co2" element={<CO2Page />} />
            <Route path="/light" element={<LightPage />} />
          </Routes>
        </div>
      </Router>
    
  );
};

export default App;
