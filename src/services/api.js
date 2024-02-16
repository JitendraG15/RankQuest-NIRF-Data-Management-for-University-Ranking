import toast from "react-hot-toast";
import axios from "axios";
// import { useSelector } from "react-redux";

import { setToken, setUser } from "../slices/AuthSlice";

const API_URL = "http://localhost:4000/api/v1";

// Send Otp
export const sendOtp = async (formData, navigate) => {
  try {
    const { email } = formData;
    const otpRes = await axios.post(`${API_URL}/sendOTP`, {
      email,
    });
    if (otpRes) {
      toast.success(otpRes.data.message);
      navigate("/signup/verifyOTP");
    }

    // return otpRes.data;
  } catch (error) {
    console.log("OTP Verification Error", error);
    toast.error(error.response.data.message);
  }
};

export const signupStudent = async (formData, navigate) => {
  try {
    const {
      name,
      rollNumber,
      dob,
      email,
      mobile,
      password,
      confirmPassword,
      otp,
    } = formData;

    const response = await axios.post(`${API_URL}/signupStudent`, {
      name,
      rollNumber,
      dob,
      email,
      mobile,
      password,
      confirmPassword,
      otp,
    });
    if (response) {
      toast.success(response.data.message);
    }

    // return otpRes.data;
  } catch (error) {
    console.error(error);
    toast.error(error.response.data.message);
  }
};

// Faculty Signup
export const signupFaculty = async (formData, navigate) => {
  try {
    const {
      name,
      facultyId,
      dob,
      email,
      mobile,
      password,
      confirmPassword,
      otp,
    } = formData;

    const response = await axios.post(`${API_URL}/signupFaculty`, {
      name,
      facultyId,
      dob,
      email,
      mobile,
      password,
      confirmPassword,
      otp,
    });
    if (response) {
      toast.success(response.data.message);
    }
  } catch (error) {
    console.error(error);
    toast.error(error.response.data.message);
  }
};

export function loginStudent(formData, navigate) {
  return async (dispatch) => {
    try {
      const { email, password } = formData;
      const response = await axios.post(`${API_URL}/loginStudent`, {
        email,

        password,
      });
      console.log(response.data);

      if (response) {
        toast.success(response.data.message);
        dispatch(setToken(response.data.token));
        dispatch(setUser(response.data.user));

        // dispatch(setUser({ ...response.data.user, image: userImage }))
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/dashboard");
        return response.data;
      } else {
        toast.error("Not a registered user");
      }
    } catch (error) {
      console.error(error);
      // console.log(error.response.data.message)
      toast.error(error.response.data.message);
    }
  };
}

export function loginFaculty(formData, navigate) {
  return async (dispatch) => {
    try {
      const { email, password } = formData;
      const response = await axios.post(`${API_URL}/loginFaculty`, {
        email,

        password,
      });

      if (response) {
        toast.success(response.data.message);
      }

      dispatch(setToken(response.data.token));
      dispatch(setUser(response.data.user));

      // dispatch(setUser({ ...response.data.user, image: userImage }))
      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/dashboard");
      return response.data;
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };
}

// API Call for Updating Program Details Of Student
export function insertProgram(formData, tokenObj, navigate) {
  return async (dispatch) => {
    try {
      const {
        programID,
        admissionDate,
        completionYear,
        isCompletedInStipulatedTime,
      } = formData;
      const token = tokenObj;

      const response = await axios.post(
        `${API_URL}/student/insertEnrolledProgramDetails`,
        {
          programID: programID,
          admissionDate: admissionDate,
          completionYear: completionYear,
          isCompletedInStipulatedTime: isCompletedInStipulatedTime,
          token: token,
        }
      );

      if (response) {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };
}

// API change password
export function changeFacultyPassword(formData, tokenObj, navigate) {
  return async (dispatch) => {
    try {
      const { currentPassword, newPassword } = formData;
      const token = tokenObj;

      const response = await axios.post(
        `${API_URL}/changeFacultyPassword`,
        {
          oldPassword: currentPassword,
          newPassword: newPassword,
          token: token,
        }
      );

      if (response) {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };
}

// API change password
export function changeStudentPassword(formData, tokenObj, navigate) {
  return async (dispatch) => {
    try {
      const { currentPassword, newPassword } = formData;
      const token = tokenObj;

      const response = await axios.post(
        `${API_URL}/changeStudentPassword`,
        {
          oldPassword: currentPassword,
          newPassword: newPassword,
          token: token,
        }
      );

      if (response) {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };
}

export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    // dispatch(resetCart())
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged Out");
    navigate("/");
  };
}

//
