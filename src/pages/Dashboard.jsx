import React from 'react';

function Dashboard() {
  return (
    <section className="w-full flex flex-col flex-grow py-20 px-8">
      <div className='mb-6'>
        <h2 className="text-2xl font-semibold text-blue-950  uppercase tracking-wide mb-1">Panel de Administracion</h2>
        <p className="text-lg text-blue-950/90 max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam expedita exercitationem dolores necessitatibus beatae alias?
        </p>
      </div>
      <div>
      <ul className='w-full flex gap-2 items-center border-b-2 border-blue-950'>
        <li className='bg-blue-950 text-yellow-300 cursor-pointer transition duration-300 ease-in-out py-1 px-3'>Mostrar Tickets</li>
        <li className='hover:bg-blue-950 hover:text-yellow-300 cursor-pointer transition duration-300 ease-in-out py-1 px-3'>Crear Tickets</li>
      </ul>
      </div>
    </section>
  );
}

export default Dashboard;

