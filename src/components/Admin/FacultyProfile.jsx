import React from "react";
import Sidebar from "../Dashboard/Sidebar";
import { useSelector } from "react-redux";
import FacultyImage from "../../utility/Images/alexander.jpg";

const FacultyProfile = () => {
  const { isCollapsed } = useSelector((state) => state.sidebar);
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="absolute top-[55%] left-[0%] mx-auto w-[70vw] mt-10">
      <div className="container mx-auto p-4">
        <div className="flex  gap-4">
          {/* Faculty Information */}
          <div className="bg-white p-4 rounded shadow-md text-center w-full">
            <img
              src={FacultyImage}
              alt="Faculty"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">
              {user ? user.name : ""}
            </h2>
            <p className="text-gray-600">Computer Science Faculty</p>
          </div>

          {/* Other Faculty-specific Widgets */}
          <div className="bg-white p-4 rounded shadow-md w-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Teaching Load</h2>
              <span className="text-green-500 font-semibold">
                Full Schedule
              </span>
            </div>
            <p className="text-gray-600">
              Your teaching schedule is full for this semester.
            </p>
          </div>

          {/* Add more faculty-specific widgets as needed */}
        </div>
      </div>
    </div>
  );
};

export default FacultyProfile;
