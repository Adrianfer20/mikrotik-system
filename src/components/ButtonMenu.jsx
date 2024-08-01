import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MenuButton = ({ to, label, className = '' }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className={`py-1 px-3 ${className}`}>
      <Link
        to={to}
        className={`${
          isActive ? 'text-yellow-300' : 'text-white'
        } hover:text-yellow-300 transition-colors duration-200`}
      >
        {label}
      </Link>
    </li>
  );
};

export default MenuButton;
