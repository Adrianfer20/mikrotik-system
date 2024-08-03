import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import NavbarBrand from './navbar/NavbarBrand';
import NavbarToggle from './navbar/NavbarToggle';
import NavbarMenu from './navbar/NavbarMenu';
import { authStateFirebase } from '../firebase/auth.firebase'; // Asegúrate de importar tu función de autenticación

const MOBILE_THRESHOLD = 768; // Umbral para pantallas móviles

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const menuRef = useRef(null); // Ref para el menú
  const toggleRef = useRef(null); // Ref para el botón de hamburguesa

  useEffect(() => {
    const unsubscribe = async () => {
      const user = await authStateFirebase();
      if (user?.email) dispatch({ type: '@user/set', payload: user });
    };
    return () => unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= MOBILE_THRESHOLD && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        window.innerWidth < MOBILE_THRESHOLD && // Solo en pantallas móviles
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {        
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    if(window.innerWidth < MOBILE_THRESHOLD)return setIsOpen(!isOpen);
  };

  return (
    <nav className='fixed left-0 top-0 right-0 w-full flex items-center justify-between bg-blue-950 text-white p-4 shadow-lg'>
      <div className='w-full flex justify-between items-center'>
        <NavbarBrand />
        {/* Pasa la referencia del botón al componente NavbarToggle */}
        <div ref={menuRef}>
        <NavbarToggle isOpen={isOpen} toggleMenu={toggleMenu} toggleRef={toggleRef} />
          <NavbarMenu isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
