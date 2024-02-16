import React from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { insertProgram } from "../../services/api";
import { useNavigate } from "react-router-dom";

const ProgramDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isCollapsed } = useSelector((state) => state.sidebar);
  const { token } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    programID: "",
    admissionDate: "",
    completionYear: "",
    isCompletedInStipulatedTime: false,
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
    // Add logic to submit the form data, e.g., send it to the server
    console.log(formData);
    dispatch(insertProgram(formData, token, navigate));

    setFormData({
      programID: "",
      admissionDate: "",
      completionYear: "",
      isCompletedInStipulatedTime: false,
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
          Enrolled Program Details
        </h1>
        <form className="max-w-lg mx-auto mt-8 border-2 border-gray-200 p-10 rounded-md">
          {/* Program ID */}
          <div className="mb-4">
            <label
              htmlFor="programID"
              className="block text-sm font-medium text-gray-600"
            >
              Program ID
            </label>
            <select
              id="programID"
              name="programID"
              value={formData.programID}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            >
              <option value="" disabled>
                Select Program ID
              </option>
              <option value="6576c74571d3b728bf4ee6e5">B.Tech CSE</option>
              <option value="6576c7a971d3b728bf4ee6e7">M.Tech CSE</option>
              <option value="65757db5f3f78ca91bdf77b0">B.Tech EE</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Admission Date */}
          <div className="mb-4">
            <label
              htmlFor="admissionDate"
              className="block text-sm font-medium text-gray-600"
            >
              Admission Date
            </label>
            <input
              type="date"
              id="admissionDate"
              name="admissionDate"
              value={formData.admissionDate}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          {/* Completion Year */}
          <div className="mb-4">
            <label
              htmlFor="completionYear"
              className="block text-sm font-medium text-gray-600"
            >
              Completion Year
            </label>
            <input
              type="date"
              id="completionYear"
              name="completionYear"
              value={formData.completionYear}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          {/* Is Completed in Stipulated Time (Checkbox) */}
          <div className="mb-4">
            <input
              type="checkbox"
              id="isCompletedInStipulatedTime"
              name="isCompletedInStipulatedTime"
              checked={formData.isCompletedInStipulatedTime}
              onChange={handleChange}
              className="mr-2"
            />
            <label
              htmlFor="isCompletedInStipulatedTime"
              className="text-sm font-medium text-gray-600"
            >
              Completed in Stipulated Time
            </label>
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
};

export default ProgramDetails;
