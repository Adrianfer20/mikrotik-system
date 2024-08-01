import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          {/* Sección de Enlaces */}
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-lg font-semibold mb-2">Enlaces</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Inicio</Link></li>
              <li><Link to="/about" className="hover:underline">Acerca de</Link></li>
              <li><Link to="/dashboard" className="hover:underline">Panel de Administración</Link></li>
            </ul>
          </div>
          {/* Información de Derechos de Autor */}
          <div className="text-center lg:text-left">
            <p>&copy; {new Date().getFullYear()} A|R System. Todos los derechos reservados.</p>
          </div>
          {/* Enlaces a Redes Sociales */}
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook fa-lg hover:text-gray-400"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter fa-lg hover:text-gray-400"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin fa-lg hover:text-gray-400"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
