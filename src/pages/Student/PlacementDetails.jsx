import React from 'react';
import Sidebar from '../../components/Dashboard/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { insertPlacementDetails } from "../../services/Student/student";


const PlacementDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const { isCollapsed } = useSelector((state) => state.sidebar);
    const {token} = useSelector((state)=>state.auth);
    const [formData, setFormData] = useState({
      employer: '',
      jobTitle: '',
      joiningDate: '',
      companyLocation: '',
      supervisor: '',
      jobDescription: '',
      salary: '',
      linkedInProfile: '',
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
      
      dispatch(insertPlacementDetails(formData, token, navigate));

      setFormData({
        employer: '',
        jobTitle: '',
        joiningDate: '',
        companyLocation: '',
        supervisor: '',
        jobDescription: '',
        salary: '',
        linkedInProfile: '',
      })
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
          Placement Details
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

      {/* Job Description */}
      <div className="mb-4">
        <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-600">
          Job Description
        </label>
        <textarea
          id="jobDescription"
          name="jobDescription"
          value={formData.jobDescription}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      {/* Salary */}
      <div className="mb-4">
        <label htmlFor="salary" className="block text-sm font-medium text-gray-600">
          Salary
        </label>
        <input
          type="number"
          id="salary"
          name="salary"
          value={formData.salary}
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

export default PlacementDetails
