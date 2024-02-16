import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { LuUserPlus2 } from "react-icons/lu";
import { GrUserSettings } from "react-icons/gr";
import { LiaUniversitySolid } from "react-icons/lia";
import { PiChalkboardTeacher } from "react-icons/pi";
import { PiStudentLight } from "react-icons/pi";
import { sidebarTabsForAdmin } from "../../../utility/sidebar";
import { IoArrowRedoCircleOutline } from "react-icons/io5";

const Admin = ({ isExpanded }) => {
  const [isExpandedStd1, setIsExpandedStd1] = useState(false);
  const [isExpandedStd2, setIsExpandedStd2] = useState(false);

  const handleStudentClick1 = () => {
    setIsExpandedStd1(!isExpandedStd1);
  };

  const handleStudentClick2 = () => {
    setIsExpandedStd2(!isExpandedStd2);
  };

  return (
    <ul >
      {sidebarTabsForAdmin.map((tab, index) => {
        return (
          <li key={index} className="mb-4 font-semibold text-black">
            <Link
              to={tab.title === "Student" || tab.title === "Faculty" ? "#" : tab.url}
              className="flex items-center hover:text-gray-500"
            >
              <span className="mr-2 text-blue-500 font-semibold text-3xl">
                {/* Icons based on tab title */}
                {tab.title === "Dashboard" ? (
                  <MdDashboard />
                ) : tab.title === "Add Entity" ? (
                  <LuUserPlus2 />
                ) : tab.title === "Update Entity" ? (
                  <GrUserSettings />
                ) : tab.title === "University" ? (
                  <LiaUniversitySolid />
                ) : tab.title === "Faculty" ? (
                  <div></div>
                ) : (
                  <div></div>
                )}
              </span>
              {isExpanded && (
                <div>
                  {tab.title === "Student" ? (
                    <div className="flex flex-col gap-2">
                      <button
                        className="flex items-center focus:outline-none"
                        onClick={handleStudentClick1}
                      >
                        <div className="flex gap-1">
                          <span className="-ml-2 text-blue-500 font-semibold text-3xl">
                            {" "}
                            <PiStudentLight />
                          </span>

                          <span>{tab.title}</span>
                          <span className="ml-2">
                            {isExpandedStd1 ? "▲" : "▼"}
                          </span>
                        </div>
                      </button>
                      {isExpandedStd1 && (
                        <div className="w-full text-black z-50  pl-4 pr-2 py-1">
                          <ul className="">
                            <li className="hover:text-gray-500">
                              <Link
                                to={"/dashboard/admin/students"}
                                className="flex gap-1"
                              >
                                <span className="mt-1">
                                  <IoArrowRedoCircleOutline />{" "}
                                </span>
                                Fetch Students
                              </Link>
                            </li>
                            <li className="hover:text-gray-500">
                              <Link
                                to={"/admin/addEntry"}
                                className="flex gap-1"
                              >
                                <span className="mt-1">
                                  <IoArrowRedoCircleOutline />{" "}
                                </span>{" "}
                                Add Student
                              </Link>
                            </li>
                            <li className="hover:text-gray-500">
                              <Link
                                to={"/dashboard/admin/updateEntity"}
                                className="flex gap-1"
                              >
                                <span className="mt-1">
                                  <IoArrowRedoCircleOutline />{" "}
                                </span>{" "}
                               Update Student
                              </Link>{" "}
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  ) : (
                  tab.title === "Faculty" ? <div className="flex flex-col gap-2">
                      <button
                        className="flex items-center focus:outline-none"
                        onClick={handleStudentClick2}
                      >
                        <div className="flex gap-1">
                          <span className="-ml-2 text-blue-500 font-semibold text-3xl">
                            {" "}
                            <PiChalkboardTeacher />
                          </span>

                          <span>{tab.title}</span>
                          <span className="ml-2">
                            {isExpandedStd2 ? "▲" : "▼"}
                          </span>
                        </div>
                      </button>
                      {isExpandedStd2 && (
                        <div className="w-full text-black z-50  pl-4 pr-2 py-1">
                          <ul className="">
                            <li className="hover:text-gray-500">
                              <Link
                                to={tab.url}
                                className="flex gap-1"
                              >
                                <span className="mt-1">
                                  <IoArrowRedoCircleOutline />{" "}
                                </span>
                                Fetch Faculty
                              </Link>
                            </li>
                            <li className="hover:text-gray-500">
                              <Link
                                to={"/dashboard/admin/addFaculty"}
                                className="flex gap-1"
                              >
                                <span className="mt-1">
                                  <IoArrowRedoCircleOutline />{" "}
                                </span>{" "}
                                Add Faculty
                              </Link>
                            </li>
                            <li className="hover:text-gray-500">
                              <Link
                                to={tab.url}
                                className="flex gap-1"
                              >
                                <span className="mt-1">
                                  <IoArrowRedoCircleOutline />{" "}
                                </span>{" "}
                               Update Faculty
                              </Link>{" "}
                            </li>
                          </ul>
                        </div>
                      )}
                    </div> : <span>{tab.title}</span>
                  )}
                </div>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Admin;
