// RegistrationForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {signupStudent, sendOtp} from "../../services/api.js";
import { setSignupData , setSignupRole} from '../../slices/AuthSlice.js';

const StudentSignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    dob: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here, for example, send the data to a server
    console.log(formData);
    dispatch(setSignupData(formData));
    dispatch(setSignupRole("Student"));
    sendOtp(formData, navigate);
    // navigate("/signup/verifyOTP");
  };

  return (
    <div className="w-[400px] mx-auto  p-6 bg-white rounded-md shadow-md">
      {/* <h2 className="text-2xl font-bold mb-6">Registration Form</h2> */}
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-4 flex flex-col items-start">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="text-sm w-full px-3 py-1 border rounded-md focus:outline-none focus:shadow-outline-blue"
            required
            placeholder='Enter Your Full Name'
          />
        </div>

        {/* Roll Number */}
        <div className="mb-4 flex flex-col items-start">
          <label htmlFor="rollNumber" className="block text-gray-700 text-sm font-bold mb-2">
            Roll Number
          </label>
          <input
            type="text"
            id="rollNumber"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleChange}
            className="text-sm w-full px-3 py-1 border rounded-md focus:outline-none focus:shadow-outline-blue"
            required
            placeholder='Enter Your Roll Number'
          />
        </div>

        {/* DOB */}
        {/* <div className="mb-4 flex flex-col items-start">
          <label htmlFor="dob" className="block text-gray-700 text-sm font-bold mb-2">
            DOB
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="text-sm w-full px-3 py-1 border rounded-md focus:outline-none focus:shadow-outline-blue"
            required
            placeholder='Enter Your Date of Birth'
          />
        </div> */}

        {/* Email */}
        <div className="mb-4 flex flex-col items-start">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="text-sm w-full px-3 py-1 border rounded-md focus:outline-none focus:shadow-outline-blue"
            required
            placeholder='Enter Your Email ID'
          />
        </div>

        {/* Mobile */}
        <div className="mb-4 flex flex-col items-start">
          <label htmlFor="mobile" className="block text-gray-700 text-sm font-bold mb-2">
            Mobile
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="text-sm w-full px-3 py-1 border rounded-md focus:outline-none focus:shadow-outline-blue"
            required
            placeholder='Enter Your 10 Digit Mobile Number'
          />
        </div>

        {/* Password */}
        <div className="mb-4 flex flex-col items-start">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="text-sm w-full px-3 py-1 border rounded-md focus:outline-none focus:shadow-outline-blue"
            required
            placeholder='Enter Your Password'
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6 flex flex-col items-start">
          <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="text-sm w-full px-3 py-1 border rounded-md focus:outline-none focus:shadow-outline-blue"
            required
            placeholder='Confirm Your Password'
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default StudentSignupForm;
