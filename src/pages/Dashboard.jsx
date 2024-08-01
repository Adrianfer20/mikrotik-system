import React from 'react';
import Button from '../components/Button';
import useUser from '../hooks/useUser';

function Dashboard() {
  const { logout } = useUser();

  return (
      <div className="p-8 max-w-md w-full">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">
          Panel de Administración
        </h1>
        <Button onClick={logout} variant="primary" size="md" className="w-full">
          Salir
        </Button>
      </div>
  );
}

export default Dashboard;

