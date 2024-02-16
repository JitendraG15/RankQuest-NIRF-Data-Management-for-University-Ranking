import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { useEffect } from "react";
import alexanderImage from "../utility/Images/alexander.jpg";
import Chart from "chart.js/auto";
import { useRadioGroup } from "@mui/material";
import { IconBase } from "react-icons";
import FacultyProfile from "../components/Admin/FacultyProfile";

const UserProfile = () => {
  const { isCollapsed } = useSelector((state) => state.sidebar);
  const { user } = useSelector((state) => state.auth);
  const chartRef = useRef(null);
  useEffect(() => {
    // Ensure the chartRef has a value before attempting to create a chart
    if (chartRef.current) {
      // Destroy the existing chart if it exists
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      // Create a new chart
      chartRef.current.chart = new Chart(chartRef.current, {
        type: "line",
        data: {
          labels: ["Semester1", "Semester2", "Semester3"],
          datasets: [
            {
              label: "GPA",
              data: [6.5, 8.5, 9.2],
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 2,
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: "category",
              labels: ["Semester1", "Semester2", "Semester3"],
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, []); //

  const events = [
    {
      id: 1,
      name: "Semester Exam",
      date: "2023-01-15",
      description: "Start Of Semester Examination",
    },
    {
      id: 2,
      name: "Internship",
      date: "2023-02-01",
      description: "Interbship Period",
    },
    {
      id: 2,
      name: "Internship Report",
      date: "2023-06-14",
      description: "Time To Submit Internship Report",
    },
    // Add more events as needed
  ];
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
        <div className="absolute top-[5%] left-[0%] mx-auto">
          <h1 className="text-2xl font-extrabold italic text-blue-500 text-center pl-10">
            {user ? "Welcome! " + user.role : "This is User Profile Page"}
          </h1>

          {user ? (
            user.role === "Student" ? (
              <div className="container mx-auto p-4">
                <div className="container mx-auto p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Student Information */}
                    <div className="bg-white p-4 rounded shadow-md text-center">
                      <img
                        src={alexanderImage}
                        alt="Student"
                        className="w-24 h-24 rounded-full mx-auto mb-4"
                      />
                      <h2 className="text-xl font-semibold mb-2">
                        {user ? user.name : ""}
                      </h2>
                      <p className="text-gray-600">Computer Science</p>
                    </div>

                    {/* GPA Progress Chart */}
                    <div className="bg-white p-4 rounded shadow-md">
                      <h2 className="text-lg font-semibold mb-2">
                        GPA Progress
                      </h2>
                      <canvas ref={chartRef} width="400" height="200" />
                    </div>

                    {/* Other Creative Widgets */}
                    <div className="bg-white p-4 rounded shadow-md">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">Achievements</h2>
                        <span className="text-green-500 font-semibold">
                          +20%
                        </span>
                      </div>
                      <p className="text-gray-600">
                        You've achieved 20% more than last month. Keep it up!
                      </p>
                    </div>

                    {/* Upcoming Events */}
                    <div className="bg-white p-4 rounded cursor-pointer w-fit">
                      {/* <CalendarIcon className="w-8 h-8 text-blue-500 mb-2 mx-auto" /> */}
                      <h2 className="text-lg font-semibold mb-2">
                        Upcoming Events
                      </h2>
                      <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 flex gap-10">
                        {events.map((event) => (
                          <div
                            key={event.id}
                            className="w-[250px] flex gap-5 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform hover:scale-105"
                          >
                            <div className="bg-blue-500 text-white p-4 flex flex-col items-start">
                              <IconBase
                                icon={useRadioGroup}
                                className="text-2xl"
                              />
                              <span className="ml-2 text-sm">
                                {new Date(event.date).toLocaleDateString()}
                              </span>
                            </div>
                            <div className="p-4">
                              <h2 className="text-xl font-semibold mb-2">
                                {event.name}
                              </h2>
                              <p className="text-gray-600 mb-4">
                                {event.description}
                              </p>
                              <a
                                href="#dfsb"
                                className="text-blue-500 hover:underline flex items-center"
                              >
                                View Details
                                <baseic icon={useRadioGroup} className="ml-2" />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Add more widgets as needed */}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <FacultyProfile/>
              </div>
            )
          ) : (
            <div>Hello User! <br/> Please Login First To Explore the services</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
