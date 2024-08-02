import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authStateFirebase } from '../firebase/auth.firebase';

import NavbarBrand from './navbar/NavbarBrand';
import NavbarMenu from './navbar/NavbarMenu';
import NavbarToggle from './navbar/NavbarToggle';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = async () => {
      const user = await authStateFirebase();
      if (user?.email) dispatch({ type: '@user/set', payload: user });
    };
    return () => unsubscribe();
  }, [dispatch]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='w-full bg-blue-950 text-white p-4 shadow-lg'>
      <div className='flex justify-between items-center'>
        <NavbarBrand />
        <NavbarToggle isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
      <NavbarMenu isOpen={isOpen} />
    </nav>
  );
}

export default Navbar;