// TakeInput.js
import React from 'react';

function TakeInput({ label, type, placeholder, value, onInputChange }) {
  return (
    <div className="mb-4 ">
      <label className="block text-sm font-bold mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onInputChange(e.target.value)}
        className="w-full border border-gray-300 p-2 "
      />
    </div>
  );
}

export default TakeInput;