import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddStudent from "../../components/Admin/AddStudent";
import StudentBultEntry from "../../components/Admin/StudentBultEntry";
import Sidebar from "../../components/Dashboard/Sidebar";

import { useState } from "react";

const AddEntry = () => {
  const { isCollapsed } = useSelector((state) => state.sidebar);
  const [entity, setEntity] = useState("");

  const handleChange = (e) => {
    setEntity(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="flex relative -z-50">
      <div className={`absolute left-0 `}>
        <Sidebar />
      </div>

      <div
        className={`min-h-screen  flex flex-col items-center justify-center absolute top-[30%] -mt-12 ${
          isCollapsed ? "w-[81%] left-[19%]" : "w-[95.5%] left-[4.5%]"
        }   `}
      >
        <div className="flex flex-col gap-5 shadow-lg p-10 rounded-md">
          <h1 className="text-2xl font-semibold">Insert Student</h1>

          {/* Radio Btn */}

          <div className="mb-4 text-center">
            <label className="flex gap-2">
              Select Insertion Type:
              <div className="flex flex-col items-start">
                <div>
                  <label >
                    <input
                      type="radio"
                      name="role"
                      value="Student"
                      checked={entity === "Student"}
                      onChange={handleChange}
                      className="m-1"
                    />
                    Insert Single Student
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="role"
                      value="StudentX"
                      checked={entity === "StudentX"}
                      onChange={handleChange}
                      className="m-1"
                    />
                    Insert Multiple Students
                  </label>
                </div>
              </div>
            </label>
          </div>

          {entity === "Student" ? (
            <AddStudent />
          ) : entity === "StudentX" ? (
            
            <StudentBultEntry />

          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddEntry;
