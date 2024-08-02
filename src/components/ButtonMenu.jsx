import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MenuButton = ({ to, label, className = '' }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className={`${className} hover:bg-white rounded-sm hover:text-yellow-600  transition-colors duration-200 py-1 px-3 ${
      isActive ? 'text-yellow-300' : 'text-white'}`}>
      <Link
        to={to}
      >
        {label}
      </Link>
    </li>
  );
};

export default MenuButton;
