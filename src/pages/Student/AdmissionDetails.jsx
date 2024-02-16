import React from "react";
import { useState } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { insertEnrollmentData } from "../../services/Student/student";

const AdmissionDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isCollapsed } = useSelector((state) => state.sidebar);
  const {token} = useSelector((state)=>state.auth);
  const [formData, setFormData] = useState({
    enrollmentDate: "",
    enrollmentTerm: "",
    entranceTestName: "",
    entranceTestRegistrationNumber: "",
    entranceTestRollNumber: "",
    entranceTestTotalMarks: "",
    entranceTestObtainedMarks: "",
    qualification: "",
    appliedProgrammes: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleProgrammeChange = (e, index) => {
    const newProgrammes = [...formData.appliedProgrammes];
    newProgrammes[index] = e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      appliedProgrammes: newProgrammes,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the form data, e.g., send it to the server
    console.log(formData);

    dispatch(insertEnrollmentData(formData, token, navigate));

    setFormData({
      enrollmentDate: "",
      enrollmentTerm: "",
      entranceTestName: "",
      entranceTestRegistrationNumber: "",
      entranceTestRollNumber: "",
      entranceTestTotalMarks: "",
      entranceTestObtainedMarks: "",
      qualification: "",
      appliedProgrammes: [],
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
        <h1 className="text-2xl font-semibold mt-10">Admission Details</h1>
        <form className="max-w-lg mx-auto mt-8 border-2 border-gray-200 p-10 rounded-md">
          {/* enrollmentDate */}
          <div className="mb-4">
            <label
              htmlFor="enrollmentDate"
              className="block text-sm font-medium text-gray-600"
            >
              Enrollment Date
            </label>
            <input
              type="date"
              id="enrollmentDate"
              name="enrollmentDate"
              value={formData.enrollmentDate}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          {/* Enrollment Term */}
          <div className="mb-4">
            <label
              htmlFor="enrollmentTerm"
              className="block text-sm font-medium text-gray-600"
            >
              Course Duration (in Yr)
            </label>
            <input
              type="number"
              id="enrollmentTerm"
              name="enrollmentTerm"
              value={formData.enrollmentTerm}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          {/* Entrance Test Name */}
          <div className="mb-4">
            <label
              htmlFor="entranceTestName"
              className="block text-sm font-medium text-gray-600"
            >
              Entrance Test Name
            </label>
            <input
              type="text"
              id="entranceTestName"
              name="entranceTestName"
              value={formData.entranceTestName}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          {/* Entrance Test Reg. Number */}
          <div className="mb-4">
            <label
              htmlFor="entranceTestRegistrationNumber"
              className="block text-sm font-medium text-gray-600"
            >
              Registration No
            </label>
            <input
              type="text"
              id="entranceTestRegistrationNumber"
              name="entranceTestRegistrationNumber"
              value={formData.entranceTestRegistrationNumber}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          {/* Entrance Test Roll. Number */}
          <div className="mb-4">
            <label
              htmlFor="entranceTestRollNumber"
              className="block text-sm font-medium text-gray-600"
            >
              Roll No.
            </label>
            <input
              type="text"
              id="entranceTestRollNumber"
              name="entranceTestRollNumber"
              value={formData.entranceTestRollNumber}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          {/* entranceTestTotalMarks*/}
          <div className="mb-4">
            <label
              htmlFor="entranceTestTotalMarks"
              className="block text-sm font-medium text-gray-600"
            >
              Total Marks
            </label>
            <input
              type="number"
              id="entranceTestTotalMarks"
              name="entranceTestTotalMarks"
              value={formData.entranceTestTotalMarks}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          {/* entranceTestObtainedMarks*/}
          <div className="mb-4">
            <label
              htmlFor="entranceTestObtainedMarks"
              className="block text-sm font-medium text-gray-600"
            >
              Obtained Marks
            </label>
            <input
              type="number"
              id="entranceTestObtainedMarks"
              name="entranceTestObtainedMarks"
              value={formData.entranceTestObtainedMarks}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          {/*qualification */}
          <div className="mb-4">
            <label
              htmlFor="qualification"
              className="block text-sm font-medium text-gray-600"
            >
              Qualification
            </label>
            <input
              type="text"
              id="qualification"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          {/* Applied Programmes (Array) */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Applied Programmes
            </label>
            {formData.appliedProgrammes.map((programme, index) => (
              <input
                key={index}
                type="text"
                value={programme}
                onChange={(e) => handleProgrammeChange(e, index)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            ))}
          </div>

          {/* Add More Programmes Button */}
          <button
            type="button"
            onClick={() =>
              setFormData((prevData) => ({
                ...prevData,
                appliedProgrammes: [...prevData.appliedProgrammes, ""],
              }))
            }
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add More Programmes
          </button>

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

export default AdmissionDetails;
