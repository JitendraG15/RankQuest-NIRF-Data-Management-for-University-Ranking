import React, { useState } from "react";
import { addStudent } from "../../services/Admin/Admin";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    email: "",
    gender: "",
    actualCategory: "",
    state: "",
    city: "",
    country: "",
    isEconomicallyAndSociallyChallenged: false,
    isGettingFeeReimbursement: false,
    isCompletedInStipulatedTime: false,
    enrollmentYear: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);

    dispatch(addStudent(formData, token, navigate));

    setFormData({
      name: "",
      rollNumber: "",
      email: "",
      gender: "",
      actualCategory: "",
      state: "",
      city: "",
      country: "",
      isEconomicallyAndSociallyChallenged: false,
      isGettingFeeReimbursement: false,
      isCompletedInStipulatedTime: false,
      enrollmentYear: "",
    });
  };

  return (
    <div className="container mt-8   mx-auto">
      <form onSubmit={handleSubmit}>
        {/* Name & Roll Number */}
        <div className="flex gap-3">
          <div className="mb-4">
            <label className="block">
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="text-sm border p-2 rounded-md"
                placeholder="Enter Name"
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="block">
              Roll Number:
              <input
                type="text"
                name="rollNumber"
                value={formData.rollNumber}
                onChange={handleChange}
                className="text-sm border p-2 rounded-md"
                placeholder="Enter Roll Number"
              />
            </label>
          </div>
        </div>

        {/* Email & Gender */}
        <div className="flex gap-3">
          <div className="mb-4">
            <label className="block">
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="text-sm border p-2 rounded-md"
                placeholder="Enter Email"
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="block">
              Gender:
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="text-sm border p-2 rounded-md"
                placeholder=""
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>
        </div>

        {/*  */}

       

        <div className="flex gap-3">
          <div className="mb-4">
            <label className="block">
              State:
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="text-sm border p-2 rounded-md"
                placeholder="Enter State"
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="block">
              City:
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="text-sm border p-2 rounded-md"
                placeholder="Enter City"
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="block">
              Country:
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="text-sm border p-2 rounded-md"
                placeholder="Enter Country"
                default="India"
              />
            </label>
          </div>
        </div>

        {/* Challenge */}

        <div className="flex gap-3">
          <div className="mb-4">
            <label className="block">
              Economically and Socially Challenged:
              <input
                type="checkbox"
                name="isEconomicallyAndSociallyChallenged"
                checked={formData.isEconomicallyAndSociallyChallenged}
                onChange={handleChange}
                className="text-sm border p-2 rounded-md"
                placeholder=""
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="block">
              Getting Fee Reimbursement:
              <input
                type="checkbox"
                name="isGettingFeeReimbursement"
                checked={formData.isGettingFeeReimbursement}
                onChange={handleChange}
                className="text-sm border p-2 rounded-md"
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="block">
              Completed in Stipulated Time:
              <input
                type="checkbox"
                name="isCompletedInStipulatedTime"
                checked={formData.isCompletedInStipulatedTime}
                onChange={handleChange}
                className="text-sm border p-2 rounded-md"
              />
            </label>
          </div>
        </div>

        <div className="flex gap-3">
        <div className="mb-4">
          <label className="block">
            Enrollment Year:
            <input
              type="number"
              name="enrollmentYear"
              value={formData.enrollmentYear}
              onChange={handleChange}
              className="text-sm border p-2 rounded-md"
              placeholder="Enter Enrollent Year"
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block">
            Actual Category:
            <input
              type="text"
              name="actualCategory"
              value={formData.actualCategory}
              onChange={handleChange}
              className="text-sm border p-2 rounded-md"
              placeholder="Enter Category"
            />
          </label>
        </div>
        </div>

        

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
