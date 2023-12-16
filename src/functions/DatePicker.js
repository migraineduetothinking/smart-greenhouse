// DatePicker
import React, { useState } from 'react';
import Select from 'react-select';

const DatePicker = ({ dates, onSelectStartDate, onSelectEndDate }) => {
  // Extract unique dates with corresponding data
  const uniqueDatesSet = new Set(dates.map((date) => new Date(date).toLocaleDateString()));
  const uniqueDates = Array.from(uniqueDatesSet);

  const options = uniqueDates.map((date, index) => ({
    value: index,
    label: date,
  }));

  const [startDateIndex, setStartDateIndex] = useState(null);
  const [endDateIndex, setEndDateIndex] = useState(null);
  const [dateError, setDateError] = useState(null);

  const handleStartDateChange = (selectedOption) => {
    const newStartDateIndex = selectedOption.value;
    // Check if the start date is greater than the end date
    if (endDateIndex !== null && newStartDateIndex > endDateIndex) {
      // Display an error message
      setDateError('Start date cannot be greater than end date');
      return;
    }
    setStartDateIndex(newStartDateIndex);
    setDateError(null);
    onSelectStartDate(uniqueDates[newStartDateIndex]);
  };

  const handleEndDateChange = (selectedOption) => {
    const newEndDateIndex = selectedOption.value;
    // Check if the end date is less than the start date
    if (startDateIndex !== null && newEndDateIndex < startDateIndex) {
      // Display an error message
      setDateError('End date cannot be less than start date');
      return;
    }
    setEndDateIndex(newEndDateIndex);
    setDateError(null);
    onSelectEndDate(uniqueDates[newEndDateIndex]);
  };

  return (
    <div className="custom-date-picker">
      <label>Дані від: </label>
      <Select options={options} onChange={handleStartDateChange} className="custom-select" />
      <label>До: </label>
      <Select options={options} onChange={handleEndDateChange} className="custom-select" />
      {dateError && <p className="date-error">{dateError}</p>}
    </div>
  );
};

export default DatePicker;
