import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar";
import { insertPersonalInfo } from "../../services/Student/student";

const PersonalDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isCollapsed } = useSelector((state) => state.sidebar);
  const { token, user } = useSelector((state) => state.auth);

  const [editable, setEditable] = useState(false);

  const [formData, setFormData] = useState({
    name: user.name || "",
    fatherName: user.fatherName || "",
    motherName: user.motherName || "",
    mobile: user.phoneNumber || "",
    // ... other fields
  });

  useEffect(() => {
    setFormData({
      fatherName: user.fatherName || "",
      motherName: user.motherName || "",
      gender: user.gender || "",
      guardianName: user.guardianName || "",
      // ... other fields
    });
  }, [user]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(insertPersonalInfo(formData, token, navigate));
    setEditable(false);
  };

  const handleEditClick = () => {
    setEditable(true);
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
        <div className="flex flex-col items-center p-8 ">
          <h1 className="text-2xl font-semibold ">
            Personal Details
          </h1>
          <form
            className=" mx-auto  border-2 border-gray-200 p-10 m-10 rounded-md"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-4 w-full">
              {/* Father's Name */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`text-sm mt-1 p-2 border border-gray-300 rounded-md w-full ${
                    !editable ? "bg-gray-100" : ""
                  }`}
                  disabled={!editable}
                />
              </div>

              {/* Mobile Number */}
              <div className="mb-4">
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-600"
                >
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`text-sm mt-1 p-2 border border-gray-300 rounded-md w-full ${
                    !editable ? "bg-gray-100" : ""
                  }`}
                  disabled={!editable}
                />
              </div>

              {/* Father's Name */}
              <div className="mb-4">
                <label
                  htmlFor="fatherName"
                  className="block text-sm font-medium text-gray-600"
                >
                  Father's Name
                </label>
                <input
                  type="text"
                  id="fatherName"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  className={`text-sm mt-1 p-2 border border-gray-300 rounded-md w-full ${
                    !editable ? "bg-gray-100" : ""
                  }`}
                  disabled={!editable}
                />
              </div>

              {/* Mother's Name */}
              <div className="mb-4">
                <label
                  htmlFor="motherName"
                  className="block text-sm font-medium text-gray-600"
                >
                  Mother's Name
                </label>
                <input
                  type="text"
                  id="motherName"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                  className={`text-sm mt-1 p-2 border border-gray-300 rounded-md w-full ${
                    !editable ? "bg-gray-100" : ""
                  }`}
                  disabled={!editable}
                />
              </div>
            </div>

            {/* ... (other form fields) */}

            {/* Add a submit button only if in editable mode */}
            {editable && (
              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            )}

            {/* Add an edit button */}
            {!editable && (
              <div className="mt-4">
                <button
                  type="button"
                  onClick={handleEditClick}
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Edit
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
