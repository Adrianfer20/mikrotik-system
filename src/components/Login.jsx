//React
import React from 'react';
import { Toaster } from 'react-hot-toast';

//Componets
import InputField from './InputField';
import Button from './Button';

//Hooks
import useLogin from '../hooks/useLogin';

//UI
const Login = () => {
  const { handlerForm } = useLogin();

  return <>
    <form onSubmit={handlerForm} className='flex flex-col'>
      <h2 className="text-xl font-bold text-center uppercase mb-4">Iniciar sesión</h2>
      <InputField
        id="email"
        label="Correo electrónico"
        type="email"
        name="email"
      />
      <InputField
        id="password"
        label="Contraseña"
        type="password"
        name="password"
      />
      <Button type="submit" variant="primary" size="md">
        Ingresar
      </Button>
    </form>
    <Toaster />
  </>
}

export default Login;
