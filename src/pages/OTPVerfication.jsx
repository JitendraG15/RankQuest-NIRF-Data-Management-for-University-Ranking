import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {signupStudent} from "../services/api";
import { OtherHouses } from "@mui/icons-material";
import OTPVerfication from "../components/OTP/OTPVerfication";

const OTPVerficationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [otp, setOTP] = useState("");
  const {signupData, signupRole} = useSelector((state)=>state.auth);

  const handleChange = (e) => {
   setOTP(e.target.value);
  };


  function handleSubmit() {
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
  return (
    <div className="flex flex-col gap-4 mt-10 text-center">
      <h1 className="font-semibold italic">
        Please Enter the OTP Sent on Your Email ID
      </h1>
      {
        signupRole === "Student" ? <OTPVerfication role="Student" /> : <OTPVerfication role="Faculty" />
      }
      
    </div>
  );
};

export default OTPVerficationPage;
