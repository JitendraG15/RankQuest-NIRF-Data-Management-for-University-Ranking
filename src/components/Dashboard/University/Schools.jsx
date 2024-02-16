import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getSchools } from "../../../services/common";
import computer from "../../../utility/Images/science.jpg";
import { Link } from "react-router-dom";

function Schools() {
  const dispatch = useDispatch();
  const { isCollapsed } = useSelector((state) => state.sidebar);
  const { schools } = useSelector((state) => state.admin);

  useEffect(() => {
    // Fetch school data from your API or replace with your data source
    dispatch(getSchools());
  }, []);

  return (
    <div className="flex relative -z-50">
      <div className={`absolute left-0 `}>{/* <Sidebar /> */}</div>

      <div
        className={`min-h-screen absolute top-[30%] ${
          isCollapsed ? "w-[90%] left-[3.5%]" : "w-[95.5%] left-[4.5%] pr-20"
        } text-center `}
      >
        <div className="absolute pl-2 pb-40">
          <div className="container mx-auto mt-8">
            <h1 className="text-4xl font-bold mb-8 -ml-96">List of Schools in University</h1>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 pl-10">
              {schools.map((school) => (
                <div
                  key={school._id}
                  className="relative hover:animate-pulse cursor-pointer bg-white p-4 border-b-2 border-r-2 border-red-100 text-justify rounded-lg shadow-md text-red-950  "
                >
                  <img
                    src={computer}
                    alt={school.schoolName}
                    className="mb-4 rounded-md w-full h-36 object-cover"
                  />
                  <h2 className="text-lg font-semibold mb-2 ">
                    {school.schoolName.slice(0,25)}...
                  </h2>
                  <p className="text-sm">{school.description.slice(0,150)}...</p>
                  <div className=" mt-5">
                    <Link
                      to={"/universityData/school/departments"}
                      className="p-2 text-white bg-black rounded-md font-semibold shadow-md text-sm"
                    >
                      See Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schools;
