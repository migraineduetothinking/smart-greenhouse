import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import uk from 'date-fns/locale/uk';

const Header = ({ title, onDateChange }) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [prevStartDate, setPrevStartDate] = useState(startDate);
  const [prevEndDate, setPrevEndDate] = useState(endDate);
  


  const handleDateButtonClick = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };

  const handleConfirmButtonClick = () => {
    setIsDatePickerOpen(false);
   
    // Зберігаємо попередні значення
    setPrevStartDate(startDate);
    setPrevEndDate(endDate);
    onDateChange(startDate, endDate);
  };

  const handleCancelButtonClick = () => {
    setIsDatePickerOpen(false);
    // Повертаємо попередні значення при скасуванні вибору дат
    setStartDate(prevStartDate);
    setEndDate(prevEndDate);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const formatDate = (date) => {
    const formattedDate = date.toLocaleDateString('uk-UA', {
      weekday: 'short',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    return capitalizeFirstLetter(formattedDate);
  };

  return (
    <header>
    <Link to="/" className="link">
      <h1>{title}</h1>
    </Link>
    <div>
        <button onClick={handleDateButtonClick}>
          {startDate.toDateString() === endDate.toDateString()
            ? formatDate(startDate)
            : `Данні з ${formatDate(startDate)} до  ${formatDate(endDate)}`}
        </button>
        {isDatePickerOpen && (
          <div className="date-picker-menu">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              locale={uk}
              maxDate={new Date()} 
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="dd/MM/yyyy"
              locale={uk}
              maxDate={new Date()} 
            />
            <button onClick={handleCancelButtonClick}>Скасувати</button>
            <button
              onClick={handleConfirmButtonClick}
              disabled={endDate < startDate}
            >
              Підтвердити
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
