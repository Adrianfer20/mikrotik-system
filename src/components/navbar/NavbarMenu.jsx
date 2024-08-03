import React from 'react';
import ROUTES from '../../const/routes';
import { useSelector } from 'react-redux';
import NavbarLogout from './NavbarLogout';
import NavbarButton from './NavbarButton';

const NavbarMenu = ({ isOpen, toggleMenu }) => {
  const user = useSelector(state => state.user);

  const isVisible = isOpen ? 'block absolute' : 'hidden relative md:static md:block';
  return (
    <ul
      onClick={toggleMenu}
      className={`md:w-auto top-full left-0 right-0 bg-blue-950 md:flex md:gap-4 pb-5 md:pb-0 transition duration-150 ease-in-out ${isVisible}`}
    >

      {
        user?.email ? (
          <>
            <NavbarButton to={ROUTES.DASHBOARD} label="Administración" />
            <NavbarButton to={ROUTES.ABOUT} label="Nosotros" />
            <NavbarLogout/>
          </>

        ) : (
          <>
            <NavbarButton to={ROUTES.HOME} label="Inicio" />
            <NavbarButton to={ROUTES.ABOUT} label="Nosotros" />
          </>
        )
      }
    </ul>
  );
}

export default NavbarMenu;
