import React from 'react';
import { Navigate } from 'react-router-dom';
import useUser from '../hooks/useUser';

function PrivateRoute({ component }) {
  const {user} = useUser()
  return user?.email ? component : <Navigate to="/" />;
}

export default PrivateRoute;
