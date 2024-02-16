import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUGStudents , getPGStudents, getPhDStudents, getDiplomaStudents, getAllStudents} from "../../services/Admin/Admin";
import Student from "../../components/Admin/Student";

const Students = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [programType, setProgramType] = useState("All");
  const { isCollapsed } = useSelector((state) => state.sidebar);
  const { students } = useSelector((state) => state.admin);

  const handleChange =  (e) => {
    setProgramType(e.target.value);
    const value = e.target.value;
    if(value === "UG"){
      dispatch(getUGStudents(navigate));
    }
    else if(value === "PG"){
      dispatch(getPGStudents(navigate));
    }else if(value === "Ph.D"){
      dispatch(getPhDStudents(navigate));
    }else if(value === "Diploma"){
      dispatch(getDiplomaStudents(navigate));
    }else if(value === "All"){
      dispatch(getAllStudents(navigate));
    }
    console.log(e.target.value);
  };

 
  useEffect(()=>{
    dispatch(getAllStudents(navigate));
  },[]);

  
  return (
    <div className="flex relative -z-50">
      <div className={`absolute left-0 `}>
        <Sidebar />
      </div>

      <div
        className={`min-h-screen  flex flex-col items-center justify-center absolute top-[30%] ${
          isCollapsed ? "w-[81%] left-[19%]" : "w-[95.5%] left-[4.5%]"
        }   `}
      >
        <div className="absolute w-full h-full mx-auto p-5">
          <h1 className="text-3xl font-bold mb-8">Student Information</h1>
          <div className="bg-gray-200 border-gray-300 shadow-md border-2 py-2 px-1 rounded-md mb-4 text-center">
            <label className="flex gap-2">
              Select Program Type:
              <div>
                <label>
                  <input
                    type="radio"
                    name="programType"
                    value="All"
                    checked={programType === "All"}
                    onChange={handleChange}
                  />
                  All
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="programType"
                    value="UG"
                    checked={programType === "UG"}
                    onChange={handleChange}
                  />
                  UG
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="programType"
                    value="PG"
                    checked={programType === "PG"}
                    onChange={handleChange}
                  />
                  PG
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="programType"
                    value="Diploma"
                    checked={programType === "Diploma"}
                    onChange={handleChange}
                  />
                  Diploma
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="programType"
                    value="Ph.D"
                    checked={programType === "Ph.D"}
                    onChange={handleChange}
                  />
                  Ph.D
                </label>
              </div>
            </label>
          </div>

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
              {
                students.length > 0 ? students.map((student) => (
                <Student key={student._id} student={student} />
              )): <div className="p-2">No Student in DB</div>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Students;
