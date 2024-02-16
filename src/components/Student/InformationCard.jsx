// InformationCard.js
import React, { useState } from 'react';
import TakeInput from "./TakeInput";

function InformationCard({ key, heading, fields }) {
  const [editMode, setEditMode] = useState(false);
  const [fieldValues, setFieldValues] = useState(fields ? fields.map(() => '') : []);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleInputChange = (index, value) => {
    const newFieldValues = [...fieldValues];
    newFieldValues[index] = value;
    setFieldValues(newFieldValues);
  };

  const handleCancelClick = () => {
    setEditMode(false);
  };

  const handleSaveClick = () => {
    setEditMode(false);
    // Perform any action needed with the saved data, e.g., update the backend
  };

  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold mb-4">{heading}</h2>
      <div className="border-solid border-2 border-indigo-600 p-6 flex flex-row gap-3">
        {fields && fields.map((field, index) => (
          <div key={index} className='w-1/3'>
            {editMode ? (
              <TakeInput
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
                value={fieldValues[index]}
                onInputChange={(value) => handleInputChange(index, value)}
              />
            ) : (
              <div>
                <label className="block text-sm font-bold mb-1">{field.label}</label>
                <div className="mb-2">{fieldValues[index]}</div>
              </div>
            )}
          </div>
        ))}
        {editMode ? (
          <div className="w-full">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleSaveClick}>
              Save
            </button>
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={handleCancelClick}>
              Cancel
            </button>
          </div>
        ) : (
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleEditClick}>
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default InformationCard;
