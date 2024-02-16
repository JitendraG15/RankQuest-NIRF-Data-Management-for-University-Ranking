import React, { useState } from 'react';
import { loginFaculty, loginStudent } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const LoginForm = ({role}) => {
  console.log("Role:", role);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmitStudent = (e) => {
    e.preventDefault();
    const formData = {
      email, password
    }
  dispatch(loginStudent(formData, navigate));

  };

  const handleSubmitFaculty = (e) => {
    e.preventDefault();
    
    const formData = {
      email, password
    }

    dispatch(loginFaculty(formData, navigate));
    
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-8 border rounded shadow-md">
      {/* <h2 className="text-2xl font-semibold mb-4">Login</h2> */}

      {
         role === "Student" ? <form onSubmit={handleSubmitStudent}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="text-sm mt-1 p-2 w-full border rounded-md"
            required
            placeholder='Enter Your Registered Email ID'
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            className="text-sm mt-1 p-2 w-full border rounded-md"
            required
            placeholder='Enter Your Password'
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </form>  :  <form onSubmit={handleSubmitFaculty}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="text-sm mt-1 p-2 w-full border rounded-md"
            required
            placeholder='Enter Your Registered Email ID'
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            className="text-sm mt-1 p-2 w-full border rounded-md"
            required
            placeholder='Enter Your Password'
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </form>
      }
      
    </div>
  );
};

export default LoginForm;
