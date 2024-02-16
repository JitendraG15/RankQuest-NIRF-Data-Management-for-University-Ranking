import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import Sidebar from "../../components/Dashboard/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStudentPassword,
  changeFacultyPassword,
} from "../../services/api";
import { useNavigate } from "react-router-dom";
const axios = require("axios");

const ChangePassword = () => {
  const { isCollapsed } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.auth);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChangePassword = async (e) => {
    try {
      // Add your API endpoint for changing the password
      e.preventDefault();
      const formData = {
        currentPassword,
        newPassword,
      };

      if(newPassword !== confirmPassword){
        setMessage("New Password and confirm password do not match");
        return null
      }

      

      if (user.role === "Student") {
        const response = dispatch(changeStudentPassword(formData, token, navigate))
        // if (response) {
        //   toast.success("Password Changed Successfully");
        // }
      } else {
        const response = dispatch(changeFacultyPassword(formData, token, navigate))
        
      }

    } catch (error) {
      console.error(error);
      // setMessage("An error occurred while changing the password.");
    }
  };

  return (
    <div className="flex relative -z-50">
      <div className={`absolute left-0 `}>
        <Sidebar />
      </div>

      <div
        className={`min-h-screen absolute top-[30%] ${
          isCollapsed ? "w-[81%] left-[19%]" : "w-[95.5%] left-[4.5%]"
        } text-center `}
      >
        <div className="absolute left-[34%]">
          <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleChangePassword}>
              <div className="w-96 p-8 bg-white rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4">Change Password</h1>
                <input
                  type="password"
                  placeholder="Current Password"
                  className="w-full mb-2 p-2 border border-gray-300 rounded"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full mb-2 p-2 border border-gray-300 rounded"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full mb-4 p-2 border border-gray-300 rounded"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                  type="submit"
                >
                  Change Password
                </button>
                {message && <p className="text-red-500 mt-2">{message}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
