import React from "react";
import { useState } from "react";
import StudentSignupForm from "../components/Signup/StudentSignup";
import FacultySignupForm from "../components/Signup/FacultySignup";

const Signup = () => {
  const [signupType, setSignupType] = useState("");

  const handleOptionChange = (event) => {
    
    setSignupType(event.target.value);
   
  };

  return (
    <>
      <div className="mt-10">
        {/* Managing Role For A Particular Form */}
        <div className="text-center">
          <div className=" pb-3 w-[50%] m-auto">
            <label className="p-2">
              <input
                type="radio"
                value="Student"
                checked={signupType === "Student"}
                onChange={handleOptionChange}
                className="mr-1"
              />
              Student
            </label>

            <label className="p-2">
              <input
                type="radio"
                value="Faculty"
                checked={signupType === "Faculty"}
                onChange={handleOptionChange}
                className="mr-1"
              />
              Faculty
            </label>

           
          </div>
          <div className="p-1">
            <h1>
              <span className="text-blue-500 italic font-semibold">
                {signupType}
              </span>{" "}
             Registration Form
            </h1>
          </div>
          <div>
          {signupType === "Student" ? (<div className="flex flex-col gap-1 -mb-10">
            {/* <h1 className="text-3xl">Student</h1> */}
            <StudentSignupForm/>

          </div>
           
          ) : (
           signupType === "Faculty" ? <div className="flex flex-col gap-1">
           {/* <h1 className="text-3xl">Faculty</h1> */}
           <FacultySignupForm/>
           </div>: <div></div>
          )}
        </div>
        </div>
       
      </div>
    </>
  );
};

export default Signup;
