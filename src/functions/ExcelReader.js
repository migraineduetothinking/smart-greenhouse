//ExcelReader
import React, { useState, useEffect } from 'react';
import { readExcelFile } from './excelUtils';
import Chart from './Chart';
import DatePicker from './DatePicker';

const ExcelReader = () => {
  const [data, setData] = useState({});
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [keyData, setKeyData] = useState({});

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const { category, date } = await readExcelFile(file);
      setData({ category, date });

      // Extract unique dates with corresponding data
      const uniqueDates = Array.from(new Set(date.map((d) => new Date(d).toLocaleDateString())));
      const keyData = {};

      uniqueDates.forEach((uniqueDate) => {
        const indices = date.reduce((acc, d, index) => {
          if (new Date(d).toLocaleDateString() === uniqueDate) {
            acc.push(index);
          }
          return acc;
        }, []);

        keyData[uniqueDate] = {
          category: indices.map((index) => category[index]),
          date: indices.map((index) => date[index]),
        };
      });

      setKeyData(keyData);
    }
  };

  const handleSelectStartDate = (date) => {
    setStartDate(date);
  };

  const handleSelectEndDate = (date) => {
    setEndDate(date);
  };

  useEffect(() => {
    // Update keyData when data changes
    if (data.date && data.category) {
      const newKeyData = {};

      Object.keys(keyData).forEach((key) => {
        const indices = data.date.reduce((acc, d, index) => {
          if (new Date(d).toLocaleDateString() === key) {
            acc.push(index);
          }
          return acc;
        }, []);

        newKeyData[key] = {
          category: indices.map((index) => data.category[index]),
          date: indices.map((index) => data.date[index]),
        };
      });

      setKeyData(newKeyData);
    }
  }, [data]);

  let filteredCategory = [];
  let filteredDate = [];

  if (startDate && endDate) {
    const selectedDates = Object.keys(keyData).filter(
      (date) => new Date(date) >= new Date(startDate) && new Date(date) <= new Date(endDate)
    );

    selectedDates.forEach((date) => {
      filteredCategory = [...filteredCategory, ...keyData[date].category];
      filteredDate = [...filteredDate, ...keyData[date].date];
    });
  } else {
    filteredCategory = data.category;
    filteredDate = data.date;
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {data.category && data.date && (
        <>
          <DatePicker
            dates={data.date}
            onSelectStartDate={handleSelectStartDate}
            onSelectEndDate={handleSelectEndDate}
          />
          {startDate && endDate && (
            <>
              <Chart category={filteredCategory} date={filteredDate} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ExcelReader;
