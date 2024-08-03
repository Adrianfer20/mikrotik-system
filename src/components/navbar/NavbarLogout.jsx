import React from 'react';
import useUser from '../../hooks/useUser';

const NavbarLogout = () => {
  const {logout} = useUser()
  return (
    <button
      onClick={logout}
      className="w-full md:w-auto flex flex-wrap md:justify-center items-center gap-2 hover:bg-white rounded-sm hover:text-yellow-600  transition-colors duration-200 py-1 px-3"
    >
      <span>Cerrar Sesión</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 mr-2"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 17v2a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2" />
        <polyline points="16 11 19 14 16 17" />
        <line x1="19" y1="14" x2="9" y2="14" />
        <path d="M13 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7" />
      </svg>
    </button>
  );
};

export default NavbarLogout;
