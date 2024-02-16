import React from "react";
import { useState } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { insertPersonalInfo } from "../../services/Student/student";
// import { Style } from "@mui/icons-material";

const TeachingExperienceFaculty = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isCollapsed } = useSelector((state) => state.sidebar);
  const { token } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({

    role: "",
    salary: "",
    officeLocation: "",
    officeHours: "",
    experience: "",
    isCurrentlyWorking: ""
    // role: "",


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
    // Add your logic to handle form submission here
    console.log(formData);
    dispatch(insertPersonalInfo(formData, token, navigate));

    setFormData({
      role: "",
      salary: "",
      officeLocation: "",
      officeHours: "",
      experience: "",
      isCurrentlyWorking: ""
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
        }   `}
      >
        <h1 className="text-2xl font-semibold pl-64 ml-10 pt-10">
          Teaching Experience
        </h1>
        <form
          className="max-w-lg mx-auto mt-8 border-2 border-gray-200 p-10 rounded-md"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-10" >
            {/* Role */}
            <div className="mb-4">
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-600"
              >
                Role
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            {/* Salary */}
            <div className="mb-4">
              <label
                htmlFor="salary"
                className="block text-sm font-medium text-gray-600"
              >
                Salary
              </label>
              <input
                type="text"
                id="salary"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
                {/* office Location */}
            <div className="mb-4">
              <label
                htmlFor="officeLocation"
                className="block text-sm font-medium text-gray-600"
              >
               office Location
              </label>
              <input
                type="text"
                id="officeLocation"
                name="officeLocation"
                value={formData.officeLocation}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
             {/* officeHours */}
            <div className="mb-4">
              <label
                htmlFor="officeHours"
                className="block text-sm font-medium text-gray-600"
              >
               office Hours
              </label>
              <input
                type="text"
                id="officeHours"
                name="officeHours"
                value={formData.officeHours}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            {/* Experience */}
            <div className="mb-4">
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-gray-600"
              >
              Experience
              </label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            {/* is currently working */}
            <div className="mb-4">
              <label
                htmlFor="isCurrentlyWorking"
                className="block text-sm font-medium text-gray-600"
              >
              Currently Working
              </label>
              <input
                type="text"
                id="isCurrentlyWorking"
                name="isCurrentlyWorking"
                value={formData.isCurrentlyWorking}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
          </div>
          {/* Add a submit button */}
          <div className="mt-4">
            <button
              type="submit"
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

export default TeachingExperienceFaculty;