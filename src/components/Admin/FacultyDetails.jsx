import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Dashboard/Sidebar";
import { useSelector } from "react-redux";
import { getFacultyProfile, deleteFacultyProfile } from "../../services/Admin/Admin";
import { useDispatch } from "react-redux";
// import { useNavigate } from 'react-router-dom'

const FacultyDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isCollapsed } = useSelector((state) => state.sidebar);
  const { faculty } = useSelector((state) => state.admin);
  const { userId } = useParams();

  const handleDelete = async (e)=>{
    e.preventDefault();

    dispatch(deleteFacultyProfile({"userId":userId}, navigate))
  }

  useEffect(() => {
    dispatch(getFacultyProfile({ id: userId }));
  }, []);
  return (
    <div className="flex relative -z-50">
      <div className={`absolute left-0 `}>
        <Sidebar />
      </div>

      <div
        className={`min-h-screen flex flex-col items-center justify-center absolute top-[30%] ${
          isCollapsed ? "w-[81%] left-[19%]" : "w-[95.5%] left-[4.5%]"
        }   `}
      >
        <div className="absolute w-full h-full mx-auto p-10">
          <div className=" mx-auto bg-white  rounded-md overflow-hidden">
            <div className="">
              <h2 className="text-2xl font-semibold mb-2">{faculty.name}</h2>
              <p className="text-gray-600 mb-2">{faculty.designation}</p>
              <p className="text-gray-600 mb-2">{faculty.gender}</p>
              <p className="text-gray-600 mb-2">{faculty.email}</p>
              <p className="text-gray-600 mb-2">
                {faculty.highestQualification}
              </p>
              <p className="text-gray-600 mb-2">
                {faculty.experienceInMonth} months of experience
              </p>
              <p className="text-gray-600 mb-2">
                {faculty.state}, {faculty.country}
              </p>
            </div>
            <div className="p-4 bg-gray-100">
              <h3 className="text-xl font-semibold mb-2">
                Role: {faculty.role}
              </h3>
              <p className="text-gray-600 mb-2">
                Employment Type: {faculty.employmentType}
              </p>
              <p className="text-gray-600 mb-2">
                Currently Working: {faculty.isCurrentlyWorking ? "Yes" : "No"}
              </p>
            </div>
            
              <button onClick={handleDelete} className="text-red-500 p-2 shadow-md font-semibold text-[15px] border-2 border-blue-300 rounded-md bg-gray-50 my-10">
                Delete Faculty Record
              </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDetails;
