import React, { useEffect } from 'react'
import Sidebar from '../Dashboard/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { deleteStudentProfile, getStudentProfile } from '../../services/Admin/Admin';

const StudentProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {student} = useSelector((state)=>state.admin)
  const {isCollapsed} = useSelector((state)=>state.sidebar)
  const { userId } = useParams();

  const handleDelete = async ()=>{
    try{
        dispatch(deleteStudentProfile({userId:userId}, navigate));
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    dispatch(getStudentProfile({id:userId}, navigate));
    console.log(student)
  },[])

  return (
     <div className="flex relative -z-50">
      <div className={`absolute left-0 `}>
        <Sidebar />
      </div>

      <div
        className={`min-h-screen flex flex-col items-center justify-center absolute top-[30%] ${
          isCollapsed ? "w-[81%] left-[19%]" : "w-[95.5%] left-[4.5%]"
        }   `}
      >
        <div className="absolute w-full h-full mx-auto p-10">
          <div className=" mx-auto bg-white  rounded-md overflow-hidden">
          
            <div className="">
              <h2 className="text-2xl font-semibold mb-2"><span className='font-semibold' >Name:</span>  {student.name}</h2>
              <p className="text-gray-600 mb-2"><span className='font-semibold'>Roll Number:</span> {student.rollNumber}</p>
              <p className="text-gray-600 mb-2"><span className='font-semibold'>Gender:</span>  {student.gender}</p>
              <p className="text-gray-600 mb-2"><span className='font-semibold'>Email ID:</span>  {student.email}</p>
              <p className="text-gray-600 mb-2">
              <span className='font-semibold'>Mobile Number:</span>   {student.phoneNumber}
              </p>
              {
                student.addresses ? <div>
                <p className="text-gray-600 mb-2">
                {student.addresses.length > 0 ? student.addresses[0].city : "XYZ"}, {student.addresses.length > 0 ? student.addresses[0].district : "XYZ"}
              </p>
              <p className="text-gray-600 mb-2">
                {student.addresses.length > 0 ? student.addresses[0].state : "XYZ"}, {student.addresses.length > 0 ?  student.addresses[0].country : "XYZ"}
              </p>
                </div>:
                <div>
                    ...
                </div>
              }
             
            </div>
            {
              student.enrolledProgram ? <div>
              <div className="p-4 bg-gray-100">
              <h3 className="text-xl font-semibold mb-2">
                Program Name: {student.enrolledProgram.programID.programName}
              </h3>
              <p className="text-gray-600 mb-2">
                Prgram Type: {student.enrolledProgram.programID.programType}
              </p>
              <p className="text-gray-600 mb-2">
                Duration: {student.enrolledProgram.programID.duration}Yr
              </p>
            </div>
              </div>:<div></div>

            }
            
            
              <button onClick={handleDelete} className="text-red-500 p-2 shadow-md font-semibold text-[15px] border-2 border-blue-300 rounded-md bg-gray-50 my-10">
                Delete Student Record
              </button>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentProfilePage
