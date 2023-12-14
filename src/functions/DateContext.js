import React, { createContext, useContext, useState } from 'react';

const DateContext = createContext();

export const DateProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const contextValue = {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
  };

  return <DateContext.Provider value={contextValue}>{children}</DateContext.Provider>;
};

export const useDateContext = () => {
  return useContext(DateContext);
};
