// UserProfile.js
import React from 'react';
import InformationCard from "./InformationCard"

function UserProfile() {
  const informationContainers = [
    {
      heading: 'Personal Information',
      fields: [
        { label: 'First Name', type: 'text', placeholder: 'Enter your first name' },
        { label: 'Last Name', type: 'text', placeholder: 'Enter your last name' },
        { label: 'Email', type: 'email', placeholder: 'Enter your email' },
       
        // Add other personal information fields as needed
      ],
    },
    {
      heading: 'Course Information',
      fields: [
        { label: 'Course Name', type: 'text', placeholder: 'Enter course name' },
        { label: 'Course Code', type: 'text', placeholder: 'Enter course code' },
        { label: 'Teacher Name', type: 'text', placeholder: 'Enter teacher name' },
        // Add other course information fields as needed
      ],
    },
    {
      heading: 'Program Information',
      fields: [
        { label: 'Branch', type: 'text', placeholder: 'Enter branch' },
        { label: 'Department', type: 'text', placeholder: 'Enter department' },
        { label: 'HOD', type: 'text', placeholder: 'Enter HOD' },
        // Add other program information fields as needed
      ],
    },
  ];

  return (
    <div className='p-9'>
      {informationContainers.map((container, index) => (
        <InformationCard key={index} heading={container.heading} fields={container.fields} />
      ))}
    </div>
  );
}

export default UserProfile;