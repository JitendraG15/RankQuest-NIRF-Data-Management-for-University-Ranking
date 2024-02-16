// Sidebar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Student from "./SidebarComponent/Student";
import TeachingFaculty from "./SidebarComponent/TeachingFaculty";
import ControllerOfExam from "./SidebarComponent/ControllerOfExam";
import FinanceOfficer from "./SidebarComponent/FinanceOfficer";
import MedicalOfficer from "./SidebarComponent/MedicalOfficer";
import NonTeachingFaculty from "./SidebarComponent/NonTeachingFaculty";
import Registrar from "./SidebarComponent/Registrar";
import VigilanceOfficer from "./SidebarComponent/VigilanceOfficer";
import Admin from "./SidebarComponent/Admin";
import { FiUser } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

import { setIsCollapsed } from "../../slices/Sidebar";

import { RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/api";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isCollapsed } = useSelector((state) => state.sidebar);
  // const {user} = useSelector((state)=>state.auth)
  const { user } = useSelector((state) => state.auth);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    dispatch(setIsCollapsed(!isExpanded));
    console.log(!isExpanded);
  };

  function handleLogoutClick() {
    // setIsHovered(!isHovered);
    dispatch(logout(navigate));
  }

  return (
    <div
      className={`min-h-screen flex ${
        isExpanded ? "w-64" : "w-16"
      }  text-black flex-col bg-gray-200 shadow-md border-2 border-r-gray-400 `}
    >
      {/* Sidebar Header */}
 
      <div className="flex-shrink-0 flex items-center justify-between p-2 border-b">
        <div>
          {/* Profile Image */}
          {isExpanded ? (
            <span className="font-semibold text-2xl  text-blue-500 flex gap-2 justify-center items-center">
              <Link to={"/dashboard"}>
                <FiUser />
              </Link>{" "}
              <div className="flex flex-col justify-center items-center ml-6">
                <span className="text-sm text-black">
                  {user ? user.name : "User"}
                </span>{" "}
                <span className="text-sm text-blue-500 font-semibold">
                  {user ? user.role : "No Role"}
                </span>
              </div>
            </span>
          ) : (
            <div></div>
          )}
        </div>
        <button className="text-lg" onClick={handleToggle}>
          {isExpanded ? (
            <span className="text-blue-500 text-2xl">
              <FaChevronLeft />
            </span>
          ) : (
            <span className="font-semibold text-2xl text-blue-500">
              <FaChevronRight />
            </span>
          )}
        </button>
      </div>

      {/* Sidebar Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Navigation Bar */}
        <nav className="p-4">
          {user ? (
            user.role === "Student" ? (
              <Student isExpanded={isExpanded} />
            ) : user.role === "Faculty" ? (
              <TeachingFaculty isExpanded={isExpanded} />
            ) : user.role === "Teaching Faculty" ? (
              <TeachingFaculty isExpanded={isExpanded} />
            ) : user.role === "Registrar" ? (
              <Registrar isExpanded={isExpanded} />
            ) : user.role === "Controller of Examination" ? (
              <ControllerOfExam isExpanded={isExpanded} />
            ) : user.role === "Finance Officer" ? (
              <FinanceOfficer isExpanded={isExpanded} />
            ) : user.role === "Medical Officer" ? (
              <MedicalOfficer isExpanded={isExpanded} />
            ) : user.role === "Chief Vigilance Officer" ? (
              <VigilanceOfficer isExpanded={isExpanded} />
            ) : (
              user.role === "Admin" ? <Admin isExpanded={isExpanded} /> : <NonTeachingFaculty isExpanded={isExpanded} />
            )
          ) : (
            <ul>
              <li>Tab I</li>
              <li>Tab II</li>

              <li>Tab III</li>
              <li>Tab IV</li>
            </ul>
          )}
        </nav>

        {/* Logout Button */}
        <div className="p-4 mt-auto">
          <button
            onClick={handleLogoutClick}
            className="w-full bg-blue-500 text-white py-2 rounded font-semibold hover:text-gray-300"
          >
            {user ? (
              isExpanded ? (
                "Logout"
              ) : (
                <span className="font-semibold text-xl">
                  <RiLogoutCircleRLine />
                </span>
              )
            ) : (
              <div>Login</div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
