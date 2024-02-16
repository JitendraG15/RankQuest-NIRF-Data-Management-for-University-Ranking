import React, { useEffect, useState } from "react";
import Faculty from "../../components/Admin/Faculty";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/Dashboard/Sidebar";
import { useNavigate } from "react-router-dom";
import { getAllTeachingFaculty } from "../../services/Admin/Admin";

const Faculties = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const { isCollapsed } = useSelector((state) => state.sidebar);
  const {faculties} = useSelector((state)=>state.admin);
//   const [faculties, setFaculties] = useState([]);

  const getFaculties = async ()=>{
    try{
     dispatch(getAllTeachingFaculty());
       
    }catch(error){
        console.error(error);
    }
  }

  useEffect(()=>{
    getFaculties();
    console.log(faculties);
  },[])
  
  return (
    <div className="flex relative -z-50">
      <div className={`absolute left-0`}>
        <Sidebar />
      </div>

      <div
        className={`min-h-screen flex flex-col items-center justify-center absolute top-[30%] ${
          isCollapsed ? "w-[81%] left-[19%]" : "w-[95.5%] left-[4.5%]"
        }   `}
      >
        <div className="absolute w-full h-full mx-auto p-5">
          <h1 className="text-3xl font-bold mb-8">Faculty Information</h1>
          <table className="min-w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Designation</th>
                <th className="border px-4 py-2">Gender</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Qualification</th>
                <th className="border px-4 py-2">Experience</th>
                <th className="border px-4 py-2">State</th>
                {/* <th className="border px-4 py-2">Country</th> */}
              </tr>
            </thead>
            <tbody>
              {
                faculties.length > 0 ? faculties.map((faculty) => (
                <Faculty key={faculty._id} faculty={faculty} />
              )): <div className="p-2">No Faculty in DB</div>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Faculties;
