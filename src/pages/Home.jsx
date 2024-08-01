import React from 'react';
import Login from '../components/Login';


function Home() {
  return <div className="p-8 max-w-md w-full">
  <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">
    ¡Bienvenido!
  </h1>
  <Login/>
</div>
}

export default Home;
