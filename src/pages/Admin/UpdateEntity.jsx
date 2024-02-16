import React, { useState } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAllDepartment,
  getAllProgram,
  getParticularStudents,
} from "../../services/Admin/Admin";
import { useNavigate } from "react-router-dom";
import Student from "../../components/Admin/Student";

const UpdateEntity = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isCollapsed } = useSelector((state) => state.sidebar);
  const { departments, programs, students } = useSelector(
    (state) => state.admin
  );
  const [department, setDepartment] = useState("");
  const [course, setCourse] = useState("");
  const [semester, setSemester] = useState("");
  // const [students, setStudents] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      getParticularStudents({ programID: course, semester: semester }, navigate)
    );
    console.log(department, course, semester);
  };

  useEffect(() => {
    dispatch(getAllDepartment(navigate));
  }, []);

  useEffect(() => {
    // if(course.length > 1){
    dispatch(getAllProgram({ departmentID: department }, navigate));
    // }
  }, [department]);

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
        <div className="absolute top-[5%] left-[0%] mx-auto flex flex-col items-start">
          <h1 className="text-2xl font-semibold pl-5">
            Select Conditions To Fetch/Update Students
          </h1>
          <div className="flex">
            <div className="flex-1 p-6">
              <form onSubmit={handleSubmit} className="flex flex-col items-start">
                {/* <h1 className="text-2xl font-semibold mb-6">Select </h1> */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                  {/* Dropdown inputs for department, program, and semester */}
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">
                      Department:
                    </label>
                    <select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="border rounded p-2 w-full"
                    >
                      <option value="">Select Department</option>
                      {departments.map((department) => (
                        <option key={department._id} value={department._id}>
                          {department.departmentName}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">
                      Program:
                    </label>
                    <select
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="border rounded p-2 w-full"
                    >
                      <option value="">Select Program</option>
                      {programs.map((program) => (
                        <option key={program._id} value={program._id}>
                          {program.programName}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">
                      Semester:
                    </label>
                    <select
                      value={semester}
                      onChange={(e) => setSemester(e.target.value)}
                      className="border rounded p-2 w-full"
                    >
                      <option value="">Select Semester</option>
                      <option value="I">1</option>
                      <option value="II">2</option>
                      <option value="III">3</option>
                      <option value="IV">4</option>
                      <option value="V">5</option>
                      <option value="VI">6</option>
                      <option value="VII">7</option>
                      <option value="VIII">8</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col items-start pl-10 mx-auto pb-20">
            <h1 className="font-semibold text-xl py-5">Student List</h1>
            <table className="min-w-full border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Roll Number</th>
                  <th className="border px-4 py-2">Gender</th>
                  <th className="border px-4 py-2">Email</th>
                  <th className="border px-4 py-2">Mobile Number</th>
                  <th className="border px-4 py-2">Role</th>
                  <th className="border px-4 py-2">Father Name</th>
                  {/* <th className="border px-4 py-2">Country</th> */}
                </tr>
              </thead>
              <tbody>
                {students.length > 0 ? (
                  students.map((student) => (
                    <Student key={student._id} student={student} />
                  ))
                ) : (
                  <div className="p-2">No Student in DB</div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateEntity;
