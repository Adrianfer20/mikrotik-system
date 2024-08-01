import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authStateFirebase } from '../firebase/auth.firebase';
import MenuButton from './ButtonMenu';

function Navbar() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = async () => {
      const user = await authStateFirebase();
      if (user?.email) dispatch({ type: '@user/set', payload: user });
    };
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <nav className='w-full flex items-center justify-between bg-blue-950 text-white p-4 shadow-lg'>
      <span className='text-yellow-300 font-bold uppercase'>A|R System</span>
      <ul className='flex gap-4'>
        <MenuButton to="/" label="Inicio" />
        <MenuButton to="/about" label="Nosotros" />
        <MenuButton to="/dashboard" label="Administración" />
      </ul>
    </nav>
  );
}

export default Navbar;

