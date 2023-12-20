import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from './Chart';
import DatePicker from './DatePicker';

const DBReader = ({ tableName }) => {
  const [data, setData] = useState([]);
  const [filteredValue, setFilteredValue] = useState([]);
  const [filteredDate, setFilteredDate] = useState([]);
  const [selectedDates, setSelectedDates] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/data?tableName=${tableName}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const formatDateString = (date) => {
    // Format date as "dd.mm.yyyy"
    return new Date(date).toLocaleDateString('en-GB', options);
  };

  const filterData = () => {
    // Update filteredValue and filteredDate based on selected range
    if (startDate && endDate) {
      const selectedDatesData = data.filter((row) => {
        const rowDate = new Date(row.date_time);
        const selectedStartDate = new Date(startDate);
        const selectedEndDate = new Date(endDate);
  
        // Compare only day, month, and year portions
        return (
          rowDate.toDateString() === selectedStartDate.toDateString() ||
          (rowDate >= selectedStartDate && rowDate <= selectedEndDate)
        );
      });
  
      setFilteredValue(selectedDatesData.map((row) => row.value));
      setFilteredDate(selectedDatesData.map((row) => new Date(row.date_time)));
    } else {
      // If no start and end date, use all data
      setFilteredValue(data.map((row) => row.value));
      setFilteredDate(data.map((row) => new Date(row.date_time)));
    }
  };


  const handleSelectStartDate = (date) => {
    const formattedDate = formatDateString(date);
    setStartDate(formattedDate);
    
    if (endDate) {
      // If endDate is selected, include it in selectedDates array
      setSelectedDates([formattedDate, endDate]);
    } else {
      setSelectedDates([formattedDate]);
    }

    filterData();
  };

  const handleSelectEndDate = (date) => {
    const formattedDate = formatDateString(date);
    setEndDate(formattedDate);
    setSelectedDates([startDate, formattedDate]);
    filterData();
  };

  useEffect(() => {
    fetchData();
  }, [tableName]);

  useEffect(() => {
    // Initial filtering when data or selectedDates change
    filterData();
    
  }, [data, selectedDates, startDate, endDate]);

  return (
    <div>
      {/* Render the DatePicker component with the desired date format */}
      <DatePicker
        dates={data.map((row) => new Date(row.date_time).toLocaleDateString('en-US', options))}
        onSelectStartDate={handleSelectStartDate}
        onSelectEndDate={handleSelectEndDate}
      />

      <Chart category={filteredValue} date={filteredDate} />
    </div>
  );
};

export default DBReader;
