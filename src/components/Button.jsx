import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  type = 'button',
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  // Define clases base para el botón
  const baseClasses = 'font-semibold rounded-lg focus:outline-none transition-colors';

  // Define clases para variantes del botón
  const variantClasses = {
    primary: 'bg-blue-800 text-white hover:bg-blue-900',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  // Define clases para tamaños del botón
  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-md',
    lg: 'px-6 py-3 text-lg',
  };

  // Construye la clase final del botón
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

// Define las propiedades esperadas para el componente
Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

export default Button;