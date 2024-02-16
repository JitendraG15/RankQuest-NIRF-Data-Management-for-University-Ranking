import React from "react";
import { useState } from "react";
// import { login } from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "../components/Login/LoginForm";

const Login = () => {

 
 
  const [loginType, setLoginType] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleOnChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleOptionChange = (event) => {
    console.log("selected opt:", event.target.value);
    setLoginType(event.target.value);
  };

  return (
    <div className="w-[100%] m-auto bg-gray-100 min-h-[100vh] flex items-center justify-center">
      <div className="bg-white border-2 border-blue-300 p-10 rounded-md shadow-2xl ">
        <div className="flex gap-3 pb-10">
          <label>
            <input
              type="radio"
              value="Student"
              checked={loginType === "Student"}
              onChange={handleOptionChange}
            />
            Student
          </label>

          <label>
            <input
              type="radio"
              value="Faculty"
              checked={loginType === "Faculty"}
              onChange={handleOptionChange}
            />
            Faculty
          </label>

         
        </div>

        <h1 className="text-lg font-semibold pb-1 border-blue-300 border-b-2 ">
          {loginType} Login 
        </h1>
        {loginType === "Student" ? (
          <LoginForm role={loginType}/>
        ) :  ( loginType === "Faculty" ? 
        <LoginForm role={loginType}/> : <div className="p-2 font-semibold">Please Select A  Role First</div>
        )}

        <Link to={"/signup"} className="ml-3 text-sm font-semibold">
          Not a Registered Member?
          <button
            type="submit"
            className="m-2 bg-blue-500 text-white border-black border-1 px-2 py-1 rounded-md hover:bg-blue-600"
          >
            SignUp Here
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
