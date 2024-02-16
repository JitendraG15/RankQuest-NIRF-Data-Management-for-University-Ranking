import React from 'react';

const UniversityDashboard = ({ data }) => {
  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">{data.universityName}</h1>
      <p className="text-gray-700 mb-4">{data.description}</p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Vice Chancellor</h2>
          <p>{data.viceChancellor}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Pro Vice Chancellor</h2>
          <p>{data.proViceChancellor}</p>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Languages</h2>
        <ul>
          {data.languages.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UniversityDashboard;
