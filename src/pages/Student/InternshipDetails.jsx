import React from 'react';
import Sidebar from '../../components/Dashboard/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { insertInternshipDetails } from "../../services/Student/student";

const InternshipDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const { isCollapsed } = useSelector((state) => state.sidebar);
    const {token} = useSelector((state)=>state.auth);
    const [formData, setFormData] = useState({
      employer: '',
      jobTitle: '',
      joiningDate: '',
      companyLocation: '',
      supervisor: '',
      description: '',
      stipendPerMonth: '',
      linkedInProfile: '',
      durationInMonth: '',
      mode:"Remote",
    });
  
    const handleChange = (e) => {
      const { name, value, type } = e.target;
  
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'number' ? parseFloat(value) : value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add logic to submit the form data, e.g., send it to the server
      console.log(formData);

      dispatch(insertInternshipDetails(formData, token, navigate));

      setFormData({
        employer: '',
        jobTitle: '',
        joiningDate: '',
        companyLocation: '',
        supervisor: '',
        description: '',
        stipendPerMonth: '',
        linkedInProfile: '',
        durationInMonth: '',
        mode:"Remote",
      });
    };
    return (
      <div className="flex relative -z-50">
        <div className={`absolute left-0 `}>
          <Sidebar />
        </div>
  
        <div
          className={`min-h-screen absolute top-[30%] ${
            isCollapsed ? "w-[81%] left-[19%]" : "w-[95.5%] left-[4.5%]"
          }  text-center `}
        >

<h1 className="text-2xl font-semibold mt-10">
          Internship Details
        </h1>
           <form className="max-w-lg mx-auto mt-8 border-2 border-gray-200 p-10 rounded-md">
     
      {/* Employer */}
      <div className="mb-4">
        <label htmlFor="employer" className="block text-sm font-medium text-gray-600">
          Employer
        </label>
        <input
          type="text"
          id="employer"
          name="employer"
          value={formData.employer}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      {/* Job Title */}
      <div className="mb-4">
        <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-600">
          Job Title
        </label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      {/* Joining Date */}
      <div className="mb-4">
        <label htmlFor="joiningDate" className="block text-sm font-medium text-gray-600">
          Joining Date
        </label>
        <input
          type="date"
          id="joiningDate"
          name="joiningDate"
          value={formData.joiningDate}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      {/* Company Location */}
      <div className="mb-4">
        <label htmlFor="companyLocation" className="block text-sm font-medium text-gray-600">
          Company Location
        </label>
        <input
          type="text"
          id="companyLocation"
          name="companyLocation"
          value={formData.companyLocation}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      {/* Supervisor */}
      <div className="mb-4">
        <label htmlFor="supervisor" className="block text-sm font-medium text-gray-600">
          Supervisor
        </label>
        <input
          type="text"
          id="supervisor"
          name="supervisor"
          value={formData.supervisor}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-600">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      {/* Stipend Per Month */}
      <div className="mb-4">
        <label htmlFor="stipendPerMonth" className="block text-sm font-medium text-gray-600">
          Stipend Per Month
        </label>
        <input
          type="number"
          id="stipendPerMonth"
          name="stipendPerMonth"
          value={formData.stipendPerMonth}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      {/* LinkedIn Profile */}
      <div className="mb-4">
        <label htmlFor="linkedInProfile" className="block text-sm font-medium text-gray-600">
          LinkedIn Profile
        </label>
        <input
          type="text"
          id="linkedInProfile"
          name="linkedInProfile"
          value={formData.linkedInProfile}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      {/* Duration in Month */}
      <div className="mb-4">
        <label htmlFor="durationInMonth" className="block text-sm font-medium text-gray-600">
          Duration in Month
        </label>
        <input
          type="number"
          id="durationInMonth"
          name="durationInMonth"
          value={formData.durationInMonth}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      {/* Mode */}
      <div className="mb-4">
        <label htmlFor="mode" className="block text-sm font-medium text-gray-600">
          Mode
        </label>
        <select
          id="mode"
          name="mode"
          value={formData.mode}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        >
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Onsite">Onsite</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="mt-4">
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </form>
        </div>
      </div>
    );
}

export default InternshipDetails
