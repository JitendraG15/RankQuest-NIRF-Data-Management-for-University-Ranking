import React from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import { useSelector } from "react-redux";

const StudentProfile = () => {
  const { isCollapsed } = useSelector((state) => state.sidebar);
  const { user } = useSelector((state) => state.auth);

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
          Profile Details
        </h1>

        <div className="max-w-lg mx-auto mt-8 border-2 border-gray-200 p-10 rounded-md">
          {/* <div className="mb-4">
            <p>
              <span className="font-semibold">Roll Number:</span>{" "}
              {user.rollNumber}
            </p>
          </div> */}

          <div className="mb-4">
            <p>
              <span className="font-semibold">Name:</span>{" "}
              {user.name ? user.name : "NA"}
            </p>
          </div>

          <div className="mb-4">
            <p>
              <span className="font-semibold">Gender:</span>{" "}
              {user.gender ? user.gender : "NA"}
            </p>
          </div>

          <div className="mb-4">
            <p>
              <span className="font-semibold">Date of Birth:</span>{" "}
              {new Date(user.dateOfBirth).toLocaleDateString()
                ? new Date(user.dateOfBirth).toLocaleDateString()
                : "NA"}
            </p>
          </div>

          <div className="mb-4">
            <p>
              <span className="font-semibold">Father's Name:</span>{" "}
              {user.fatherName ? user.fatherName : "NA"}
            </p>
          </div>

          <div className="mb-4">
            <p>
              <span className="font-semibold">Mother's Name:</span>{" "}
              {user.motherName ? user.motherName : "NA"}
            </p>
          </div>

          {/* Add more profile details as needed */}

          {/* Address Section */}
          <div className="mt-6">
            {user.addresses.length > 0 ? (
              <div>
                <h2 className="text-xl font-semibold mb-4">Address</h2>
                <div className="mb-2">
                  <p>
                    <span className="font-semibold">City:</span>{" "}
                    {user.addresses[0].city}
                  </p>
                  <p>
                    <span className="font-semibold">District:</span>{" "}
                    {user.addresses[0].district}
                  </p>
                  <p>
                    <span className="font-semibold">State:</span>{" "}
                    {user.addresses[0].state}
                  </p>
                  <p>
                    <span className="font-semibold">Country:</span>{" "}
                    {user.addresses[0].country}
                  </p>
                  <p>
                    <span className="font-semibold">Postal Code:</span>{" "}
                    {user.addresses[0].postalCode}
                  </p>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
