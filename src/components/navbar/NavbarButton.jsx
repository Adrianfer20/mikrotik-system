import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavbarButton = ({ to, label, className = '' }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className={`${className} hover:bg-white rounded-sm hover:text-yellow-600  transition-colors duration-200${
      isActive ? 'text-yellow-300' : 'text-white'}`}>
      <Link
        className='block md:inline-block w-full  py-1 px-3'
        to={to}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavbarButton;
