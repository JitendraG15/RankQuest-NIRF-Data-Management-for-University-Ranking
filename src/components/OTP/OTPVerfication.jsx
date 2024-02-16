import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {signupStudent, signupFaculty} from "../../services/api";

const OTPVerfication = (role) => {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const [otp, setOTP] = useState("");
  const {signupData, signupRole} = useSelector((state)=>state.auth);

    const handleChange = (e) => {
        setOTP(e.target.value);
       };
    
       function handleSubmitStudent() {
         console.log("SignupData:",signupData);
         const {
             name,
             rollNumber,
             dob,
             email,
             mobile,
             password,
             confirmPassword } = signupData;
     
             const formData = {
               name, rollNumber, dob, email, mobile, password, confirmPassword, otp
             };
     
             console.log("FormData:", formData);
     
             signupStudent(formData, navigate);
             navigate("/");
           
       }

       function handleSubmitFaculty() {
        console.log("SignupData:",signupData);
        const {
            name,
            facultyId,
            email,
            mobile,
            dob,
            password,
            confirmPassword, } = signupData;
    
            const formData = {
              name, facultyId, dob, email, mobile, password, confirmPassword, otp
            };
    
            console.log("FormData:", formData);
    
            signupFaculty(formData, navigate);
            navigate("/");
          
      }


  return (
    <div>
    {
        signupRole === "Student" ?  
        <form onSubmit={handleSubmitStudent}>
        
        <label>
          Enter OTP For Student
          <input 
          type="text"
          name="otp"
          value={otp}
          onChange={handleChange}
          className="border-gray-100 border-2 ml-2 mb-2" />
        </label>
        <br />
        <button
          type="submit"
          className="bg-blue-500 text-white px-2 rounded py-1"
        >
          Verify
        </button>
      </form> : 
     (
       <form onSubmit={handleSubmitFaculty}>
        <label>
          Enter OTP For Faculty
          <input 
          type="text"
          name="otp"
          value={otp}
          onChange={handleChange}
          className="border-gray-100 border-2 ml-2 mb-2" />
        </label>
        <br />
        <button
          type="submit"
          className="bg-blue-500 text-white px-2 rounded py-1"
        >
          Verify
        </button>
      </form> 
     )
    }
     
    </div>
  )
}

export default OTPVerfication
