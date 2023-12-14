// DatePicker
import React from 'react';
import Select from 'react-select';

const DatePicker = ({ dates, onSelectStartDate, onSelectEndDate }) => {
  // Extract unique dates with corresponding data
  const uniqueDatesSet = new Set(dates.map((date) => new Date(date).toLocaleDateString()));
  const uniqueDates = Array.from(uniqueDatesSet);

  const options = uniqueDates.map((date, index) => ({
    value: index,
    label: date,
  }));

  const handleStartDateChange = (selectedOption) => {
    const startDate = uniqueDates[selectedOption.value];
    onSelectStartDate(startDate);
  };

  const handleEndDateChange = (selectedOption) => {
    const endDate = uniqueDates[selectedOption.value];
    onSelectEndDate(endDate);
  };

  return (
   <div className="custom-date-picker">
      <label>Дані від: </label>
      <Select options={options} onChange={handleStartDateChange} className="custom-select" />
      <label>До: </label>
      <Select options={options} onChange={handleEndDateChange} className="custom-select" />
   </div>
  );
};

export default DatePicker;
