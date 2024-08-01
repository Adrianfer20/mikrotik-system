import React, { useState } from 'react';
import useUser from '../hooks/useUser';
import Button from './Button';
import InputField from './InputField';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useUser()
    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <form className="bg-white p-6 rounded shadow-md max-w-2xl mx-auto" onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold text-center mb-4">Iniciar sesión</h2>
            <InputField
                id="email"
                label="Correo electrónico"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
                id="password"
                label="Contraseña"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <div className='flex justify-center items-center'>
            <Button type="submit" variant="primary" size="md" className='mx-auto'>
                Iniciar sesión
            </Button>
            </div>
        </form>
    );
};

export default Login;
