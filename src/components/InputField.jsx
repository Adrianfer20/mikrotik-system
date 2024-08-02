import React from 'react';

const InputField = ({ id,name, label, type, value, onChange }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      id={id}
      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default InputField;
