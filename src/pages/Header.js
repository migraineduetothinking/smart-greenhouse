import React from 'react';
import { Link } from 'react-router-dom';


const Header = ({ title }) => {

  const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.toDateString();
  };

  return (
    <header>
      <Link to="/" className="link">
        <h1>{title}</h1>
      </Link>
      <div>
        <button>{getCurrentDate()}</button>
      </div>
    </header>
  );
};

export default Header;