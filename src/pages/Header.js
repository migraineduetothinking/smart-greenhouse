import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import uk from 'date-fns/locale/uk';

const Header = ({ title, onDateChange }) => {
  // Хук стану для відстеження відкриття та закриття меню вибору дат
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  // Стани для початкової та кінцевої дати
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // Стани для зберігання попередніх значень дат
  const [prevStartDate, setPrevStartDate] = useState(startDate);
  const [prevEndDate, setPrevEndDate] = useState(endDate);
  

  // Обробник натискання на кнопку відкриття/закриття меню вибору дат
  const handleDateButtonClick = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };

  // Обробник натискання на кнопку підтвердження
  const handleConfirmButtonClick = () => {
    setIsDatePickerOpen(false);
   
    // Зберігаємо попередні значення
    setPrevStartDate(startDate);
    setPrevEndDate(endDate);

    // Передаємо дати 
    onDateChange(startDate, endDate);
  };

  // Обробник натискання на кнопку скасування
  const handleCancelButtonClick = () => {
    setIsDatePickerOpen(false);
    // Повертаємо попередні значення при скасуванні вибору дат
    setStartDate(prevStartDate);
    setEndDate(prevEndDate);
  };

  // Функція для великої літери першої букви в рядку
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Функція для форматування дати у вигляді "День тижня, число Місяць Рік"
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
    {/* <div>
        <button onClick={handleDateButtonClick}>
          {startDate.toDateString() === endDate.toDateString()
            ? formatDate(startDate)
            : `Данні з ${formatDate(startDate)} до  ${formatDate(endDate)}`}
        </button>
        {isDatePickerOpen && (
          <div className="date-picker-menu">
            {/* Календар для вибору лівої дати }
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              locale={uk}
              maxDate={new Date()} 
            />
            {/* Календар для вибору правої дати }
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="dd/MM/yyyy"
              locale={uk}
              maxDate={new Date()} 
            />
            <button onClick={handleCancelButtonClick}>Скасувати</button>
            {/* Підтвердження вибору дати з блокуванням кнопки при помилковому виборі }
            <button
              onClick={handleConfirmButtonClick}
              disabled={endDate < startDate}
            >
              Підтвердити
            </button>
          </div>
        )}
      </div> */}
    </header>
  );
};

export default Header;
