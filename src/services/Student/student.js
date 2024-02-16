import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../../slices/AuthSlice";

// import { setToken, setUser } from "../slices/AuthSlice";

const API_URL = "http://localhost:4000/api/v1";

// Insert Personal Information Of the student
export function insertPersonalInfo(formData, tokenObj, navigate) {
  return async (dispatch) => {
    try {
      const token = tokenObj;
      console.log("Token in api handler:", token);

      const {
        name,
        fatherName,
        motherName,
        mobile
        
      } = formData;

      const response = await axios.post(
        `${API_URL}/student/studentPersonalInfo`,
        {
          name,
          fatherName,
          motherName,
          phoneNumber:mobile,
          token,
        }
      );

      if (response) { 
        toast.success(response.data.message);
        
      } 

      // console.log("response:", response.data);

      //   navigate("/dashboard");
      // return response.data;
    } catch (error) {
      console.error(error);
      toast.error(error.data.message);
    }
  };
}

// get Student Profile
export function getStudentProfile(tokenObj, navigate) {
  return async (dispatch) => {
    try {
      // const token = tokenObj;
      console.log("Token in Student Api:", tokenObj);
      const response = await axios.post(
        `${API_URL}/student/getStudentProfile`,
        {
          token: tokenObj,
        }
      );

      if(response){
        dispatch(setUser(response.data.student));
      console.log(response.data.student);
      // toast.success(response.data.message);
      }
      
      // toast.success("User Profile Fetched Successfully");
    } catch (error) {
      console.error(error);
      // toast.error(error.data.message);
    }
  };
}

// Insert Student Enrollment Details
export function insertEnrollmentData(formData, tokenObj, navigate) {
  return async (dispatch) => {
    try {
      const token = tokenObj;
      // console.log("Token in api handler:", token);

      const {
        enrollmentDate,
        enrollmentTerm,
        entranceTestName,
        entranceTestRegistrationNumber,
        entranceTestRollNumber,
        entranceTestTotalMarks,
        entranceTestObtainedMarks,
        qualification,
        appliedProgrammes,
      } = formData;

      const response = await axios.post(
        `${API_URL}/student/insertStudentAdmissionDetails`,
        {
          enrollmentDate,
          enrollmentTerm,
          entranceTestName,
          entranceTestRegistrationNumber,
          entranceTestRollNumber,
          entranceTestTotalMarks,
          entranceTestObtainedMarks,
          qualification,
          appliedProgrammes,
          token,
        }
      );

      if (response) {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.data.message);
    }
  };
}

// insert Placement Details
export function insertPlacementDetails(formData, tokenObj, navigate) {
  return async (dispatch) => {
    try {
      const token = tokenObj;
      const {
        employer,
        jobTitle,
        joiningDate,
        companyLocation,
        supervisor,
        jobDescription,
        salary,
        linkedInProfile,
      } = formData;

      const response = await axios.post(
        `${API_URL}/student/insertPlacementDetails`,
        {
          employer: employer,
          jobTitle: jobTitle,
          jobDescription: jobDescription,
          supervisor: supervisor,
          salary: salary,
          linkedInProfile: linkedInProfile,
          joiningDate: joiningDate,
          companyLocation: companyLocation,
          token: tokenObj,
        }
      );

      if (response) {
        toast.success(response.data.message);
        console.log("Placement:", response.data.placement);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.data.message);
    }
  };
}

// insert Internship Details
export function insertInternshipDetails(formData, tokenObj, navigate) {
  return async (dispatch) => {
    try {
      const token = tokenObj;
      const {
        employer,
        jobTitle,
        joiningDate,
        companyLocation,
        supervisor,
        description,
        stipendPerMonth,
        linkedInProfile,
        durationInMonth,
        mode,
      } = formData;

      const response = await axios.post(
        `${API_URL}/student/insertInternshipDetails`,
        {
          employer: employer,
          jobTitle: jobTitle,
          supervisor: supervisor,
          description: description,
          stipendPerMonth: stipendPerMonth,
          joiningDate: joiningDate,
          linkedInProfile: linkedInProfile,
          durationInMonth: durationInMonth,
          companyLocation: companyLocation,
          mode: mode,
          token: token,
        }
      );

      if (response) {
        toast.success(response.data.message);
        console.log("Placement:", response.data.placement);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.data.message);
    }
  };
}
