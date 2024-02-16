import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFaculty } from "../../services/Admin/Admin";

const AddSingleFaculty = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const [facultyData, setFacultyData] = useState({
    name: "",
    facultyID: "",
    email: "",
    gender: "",
    state: "",
    country: "",
    highestQualification: "",
    experienceInMonth: "",
    employmentType: "",
    role: "",
    designation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFacultyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(facultyData);
    dispatch(addFaculty(facultyData, token, navigate));
    setFacultyData({
      name: "",
      facultyID: "",
      email: "",
      gender: "",
      state: "",
      country: "",
      highestQualification: "",
      experienceInMonth: "",
      employmentType: "",
      role: "",
      designation: "",
    });
  };

  return (
    <div className="container mt-8  mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-3">
          <label className="block mb-4">
            Name:
            <input
              type="text"
              name="name"
              value={facultyData.name}
              onChange={handleChange}
              className="text-sm border p-2 rounded-md"
              placeholder="Enter Full Name"
            />
          </label>

          <label className="block mb-4">
            Faculty ID:
            <input
              type="text"
              name="facultyID"
              value={facultyData.facultyID}
              onChange={handleChange}
              className="text-sm border p-2 rounded-md"
              placeholder="Enter Faculty ID"
            />
          </label>
        </div>

        <div className="flex gap-3">
          <label className="block mb-4">
            Email:
            <input
              type="email"
              name="email"
              value={facultyData.email}
              onChange={handleChange}
              className="text-sm border p-2 rounded-md"
              placeholder="Enter Email"
            />
          </label>

          <label className="block mb-4">
            Gender:
            <select
              name="gender"
              value={facultyData.gender}
              onChange={handleChange}
              className="text-sm border p-2 rounded-md"
              placeholder="Select Gender"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </div>

        <div className="flex gap-3">
        <label className="block mb-4">
          State:
          <input
            type="text"
            name="state"
            value={facultyData.state}
            onChange={handleChange}
            className="text-sm border p-2 rounded-md"
            placeholder="Enter State"
          />
        </label>

        <label className="block mb-4">
          Country:
          <input
            type="text"
            name="country"
            value={facultyData.country}
            onChange={handleChange}
            className="text-sm border p-2 rounded-md"
            placeholder="Enter Country"
            default="India"
          />
        </label>
        </div>

       

       <div className="flex gap-3">
       <label className="block mb-4">
          Highest Qualification:
          <select
            name="highestQualification"
            value={facultyData.highestQualification}
            onChange={handleChange}
            className="text-sm border p-2 rounded-md"
            placeholder="Enter Highest Qualification"
          >
            <option value="">Highest Qualification</option>
            <option value="Ph.D">Ph.D</option>
            <option value="PG">Master's</option>
            <option value="UG">Bachelor's</option>
            <option value="Diploma">Diploma</option>
            {/* Add more options as needed */}
          </select>
        </label>

        <label className="block mb-4">
          Experience in Months:
          <input
            type="number"
            name="experienceInMonth"
            value={facultyData.experienceInMonth}
            onChange={handleChange}
            className="text-sm border p-2 rounded-md"
            placeholder="Enter Experience"
          />
        </label>
       </div>

      
<div className="flex gap-3">
<label className="block mb-4">
          Employment Type:
          <select
            name="employmentType"
            value={facultyData.employmentType}
            onChange={handleChange}
            className="text-sm border p-2 rounded-md"
            placeholder="Select Employment Tyep"
          >
            <option value="">Employment Type</option>
            <option value="Regular">Regular</option>
            <option value="Contract">Contract</option>
            <option value="Part-Time">Part-Time</option>
            {/* Add more options as needed */}
          </select>
        </label>

        <label className="block mb-4">
          Role:
          <select
            name="role"
            value={facultyData.role}
            onChange={handleChange}
            className="border p-2 rounded-md"
          >
            <option value="">Select Role</option>
            <option value="Teaching Faculty">Teaching Faculty</option>
            <option value="Non-Teaching Faculty">Administrative Staff</option>
            <option value="Researcher">Researcher</option>
            {/* Add more options as needed */}
          </select>
        </label>
</div>
       

        <label className="block mb-4">
          Designation:
          <select
            name="designation"
            value={facultyData.designation}
            onChange={handleChange}
            className="border p-2 rounded-md"
          >
            <option value="">Select Designation</option>
            <option value="Assistant Professor">Assistant Professor</option>
            <option value="Associate Professor">Associate Professor</option>
          </select>
        </label>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddSingleFaculty;
