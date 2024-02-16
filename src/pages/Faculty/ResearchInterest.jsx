import React from "react";
import { useState } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { insertPersonalInfo } from "../../services/Student/student";
import { Style } from "@mui/icons-material";

const ResearchInterest = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isCollapsed } = useSelector((state) => state.sidebar);
  const { token } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({

    researchInterests: "",
    publications: "",
    consultancyProjects: "",
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
      researchInterests: "",
      publications: "",
      consultancyProjects: "",
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
          Research Interests
        </h1>
        <form
          className="max-w-lg mx-auto mt-8 border-2 border-gray-200 p-10 rounded-md"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-10" >
            {/* researchInterests */}
            <div className="mb-4">
              <label
                htmlFor="researchInterest"
                className="block text-sm font-medium text-gray-600"
              >
                researchInterest
              </label>
              <input
                type="text"
                id="researchInterest"
                name="researchInterest"
                value={formData.researchInterest}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            {/* Publications */}
            <div className="mb-4">
              <label
                htmlFor="publications"
                className="block text-sm font-medium text-gray-600"
              >
                Publications
              </label>
              <input
                type="text"
                id="publications"
                name="publications"
                value={formData.publications}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
                {/*consultancy Projects */}
            <div className="mb-4">
              <label
                htmlFor="consultancyProjects"
                className="block text-sm font-medium text-gray-600"
              >
               Consultancy Projects
              </label>
              <input
                type="text"
                id="consultancyProjects"
                name="consultancyProjects"
                value={formData.consultancyProjects}
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

export default ResearchInterest;