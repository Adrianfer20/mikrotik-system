import React from 'react';
import MenuButton from './ButtonMenu';
import ROUTES from '../../const/routes';

const NavbarMenu = ({ isOpen }) => (
  <ul className={`mt-4 md:flex md:gap-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
    <MenuButton to={ROUTES.HOME} label="Inicio" />
    <MenuButton to={ROUTES.ABOUT} label="Nosotros" />
    <MenuButton to={ROUTES.DASHBOARD} label="Administración" />
  </ul>
);

export default NavbarMenu;
