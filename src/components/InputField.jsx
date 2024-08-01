import React from 'react';

const InputField = ({ id, label, type, value, onChange }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      id={id}
      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      value={value}
      onChange={onChange}
      required
    />
  </div>
);

export default InputField;
