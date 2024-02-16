import React from 'react';

const UniversityDetails = ({ university }) => {
  return (
    <div className='px-9'>
 <div className="container mx-auto p-4  mt-8">
      <h1 className="text-4xl font-bold mb-4">{university.universityName}</h1>
      <p className="text-gray-600">{university.description}</p>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">University Information</h2>
        <ul className="list-disc ml-8">
          <li>Founded Year: {university.foundedYear}</li>
          <li>Motto: {university.motto}</li>
          <li>Affiliation Type: {university.affiliationType}</li>
          <li>Accreditation: {university.accredition}</li>
          <li>Vice Chancellor: {university.viceChancellor}</li>
          <li>Pro Vice Chancellor: {university.proViceChancellor}</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Official Languages</h2>
        <ul className="list-disc ml-8">
          {university.languages ? university.languages.map((language, index) => (
            <li key={index}>{language}</li>
          )) : <div>No Data Available</div>}
        </ul>
      </div>
    </div>
    </div>

   
  );
};

export default UniversityDetails;
