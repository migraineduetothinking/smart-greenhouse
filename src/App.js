import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TemperaturePage from './pages/TemperaturePage';
import HumidityPage from './pages/HumidityPage';
import CO2Page from './pages/CO2Page';
import LightPage from './pages/LightPage';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
