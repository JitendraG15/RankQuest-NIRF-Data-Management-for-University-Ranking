import toast from "react-hot-toast";
import axios from "axios";
import { setnirfData, setFaculties, setFaculty, setStudents, setStudent, setDepartment, setPrograms } from "../../slices/Admin";
const API_URL = "http://localhost:4000/api/v1";



// Insert Personal Information Of the student
export function addStudent(formData, tokenObj, navigate) {
  return async (dispatch) => {
    try {
      const token = tokenObj;
      console.log("Token in api handler:", token);

      const {
        name,
        rollNumber,
        email,
        gender,
        actualCategory,
        state,
        city,
        country,
        isEconomicallyAndSocialyChallenged,
        isGettingFeeReimbursement,
        isCompletedInStipulatedTime,
        enrollmentYear,
      } = formData;

      const response = await axios.post(`${API_URL}/admin/addStudent`, {
        name,
        rollNumber,
        email,
        gender,
        actualCategory,
        state,
        city,
        country,
        isEconomicallyAndSocialyChallenged,
        isGettingFeeReimbursement,
        isCompletedInStipulatedTime,
        enrollmentYear,
        token,
      });

      if (response) {
        toast.success(response.data.message);
      }

      // console.log("response:", response.data);

      //   navigate("/dashboard");
      // return response.data;
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };
}

export function addFaculty(formData, tokenObj, navigate) {
  return async (dispatch) => {
    try {
      const token = tokenObj;
      console.log("Token in api handler:", token);

      const {
        name,
        facultyID,
        email,
        gender,
        state,
        country,
        highestQualification,
        experienceInMonth,
        employmentType,
        role,
        designation,
      } = formData;

      const response = await axios.post(`${API_URL}/admin/addFaculty`, {
        name,
        facultyID,
        email,
        gender,
        state,
        country,
        highestQualification,
        experienceInMonth,
        employmentType,
        role,
        designation,
        token,
      });

      if (response) {
        toast.success(response.data.message);
      }

      // console.log("response:", response.data);

      //   navigate("/dashboard");
      // return response.data;
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };
}

// Get Data For Nirf Ranking
export function getDataForNirfRanking(){
  return async (dispatch)=>{
    try{
      const response = await axios.post(`${API_URL}/getDataForNirfRanking`);

      if(response){
        dispatch(setnirfData(response.data))
        toast.success("")
      }

    }catch(error){
      console.error(error);
    }
  }
}

// Get Teaching Faculty
export function getAllTeachingFaculty(){
  return async (dispatch)=>{
    try{
      const response = await axios.get(`${API_URL}/admin/getAllTeachingFaculty`);

      if(response){
        // dispatch(setnirfData(response.data))
        // toast.success(response.data.message)
        dispatch(setFaculties(response.data.faculties));
      }

    }catch(error){
      console.error(error);
      toast.error(error.response.data.message)
    }
  }
}

// Get Faculty Profile
export function getFacultyProfile(formData){
  return async (dispatch)=>{
    const {id} = formData;
    try{
      const response = await axios.post(`${API_URL}/admin/getFacultyProfile`,{
        id:id
      });

      if(response){
        // dispatch(setnirfData(response.data))
        // toast.success(response.data.message)
        dispatch(setFaculty(response.data.faculty));
      }

    }catch(error){
      console.error(error);
      toast.error(error.response.data.message)
    }
  }
}

// Delete Faculty Profile
export function deleteFacultyProfile(formData, navigate){
  return async (dispatch)=>{
    const {userId} = formData;
    console.log("Service ID:", userId)
    try{
      const response = await axios.delete(`${API_URL}/admin/deleteFaculty/${userId}`);

      if(response){
        // dispatch(setnirfData(response.data))
        toast.success(response.data.message)
        // dispatch(setFaculty(response.data.faculty));
        console.log(response.data)
        navigate("/dashboard/admin/faculty")
      }

    }catch(error){
      console.error(error);
      toast.error(error.response.data.message)
    }
  }
}

// Get all Students
export function getAllStudents(navigate){
  return async (dispatch)=>{

    try{
      const response = await axios.get(`${API_URL}/admin/getAllStudents`);

      if(response){
        // dispatch(setnirfData(response.data))
        toast.success(response.data.message)
        dispatch(setStudents(response.data.students));
      }

    }catch(error){
      console.error(error);
      toast.error(error.response.data.message)
    }
  }
}

// Get particular Students
export function getParticularStudents(formData,navigate){
  return async (dispatch)=>{
    const {programID, semester} = formData;
    try{
      const response = await axios.get(`${API_URL}/admin/getspecificstudent?programID=${programID}&semester=${semester}`);

      if(response){
        // dispatch(setnirfData(response.data))
        toast.success(response.data.message)
        dispatch(setStudents(response.data.students));
      }

    }catch(error){
      console.error(error);
      toast.error(error.response.data.message)
    }
  }
}

// Get UG Students
export function getUGStudents(navigate){
  return async (dispatch)=>{

    try{
      const response = await axios.get(`${API_URL}/admin/getUGStudent`);

      if(response){
        // dispatch(setnirfData(response.data))
        toast.success(response.data.message)
        dispatch(setStudents(response.data.students));
      }

    }catch(error){
      console.error(error);
      toast.error(error.response.data.message)
    }
  }
}

// Get PG Students
export function getPGStudents(navigate){
  return async (dispatch)=>{

    try{
      const response = await axios.get(`${API_URL}/admin/getPGStudent`);

      if(response){
        // dispatch(setnirfData(response.data))
        toast.success(response.data.message)
        dispatch(setStudents(response.data.students));
      }

    }catch(error){
      console.error(error);
      toast.error(error.response.data.message)
    }
  }
}


// Get PG Students
export function getPhDStudents(navigate){
  return async (dispatch)=>{

    try{
      const response = await axios.get(`${API_URL}/admin/getPhDStudent`);

      if(response){
        // dispatch(setnirfData(response.data))
        toast.success(response.data.message)
        dispatch(setStudents(response.data.students));
      }

    }catch(error){
      console.error(error);
      toast.error(error.response.data.message)
    }
  }
}

// Get Diploma Students
export function getDiplomaStudents(navigate){
  return async (dispatch)=>{

    try{
      const response = await axios.get(`${API_URL}/admin/getDiplomaStudent`);

      if(response){
        // dispatch(setnirfData(response.data))
        toast.success(response.data.message)
        dispatch(setStudents(response.data.students));
      }

    }catch(error){
      console.error(error);
      toast.error(error.response.data.message)
    }
  }
}


// Get Student Profile
export function getStudentProfile(formData, navigate){
  return async (dispatch)=>{
    const {id} = formData;
    console.log("ID:", id);
    try{
      const response = await axios.post(`${API_URL}/admin/getStudentProfile`,{
        id:id
      });

      if(response){
        // dispatch(setnirfData(response.data))
        toast.success(response.data.message)
        dispatch(setStudent(response.data.student));
        // navigate("/dashboard/admin/students");
      }

    }catch(error){
      console.error(error);
      toast.error(error.response.data.message)
    }
  }
}


// Delete Student Profile
export function deleteStudentProfile(formData, navigate){
  return async (dispatch)=>{
    const {userId} = formData;
    console.log("Service ID:", userId)
    try{
      const response = await axios.delete(`${API_URL}/admin/deleteStudent/${userId}`);

      if(response){
        // dispatch(setnirfData(response.data))
        toast.success(response.data.message)
        // dispatch(setFaculty(response.data.faculty));
        console.log(response.data)
        navigate("/dashboard/admin/students")
      }

    }catch(error){
      console.error(error);
      toast.error(error.response.data.message)
    }
  }
}


// Insert Student Records in bulk
export function insertStudentsInBulk(formData, navigate){
  return async (dispatch)=>{
    const {students} = formData;
    console.log("Students:", students);
    try{
      const response = await axios.post(`${API_URL}/admin/uploadBulkDataOfStudent`,{
        students
      });

      if(response){
        // dispatch(setnirfData(response.data))
        toast.success(response.data.message)
        // dispatch(setFaculty(response.data.faculty));
        console.log(response.data)
        // navigate("/dashboard/admin/students")
      }

    }catch(error){
      console.error(error);
      toast.error(error.response.data.message)
    }
  }
}

// Insert Faculty Records in bulk
export function insertFacultyInBulk(formData, navigate){
  return async (dispatch)=>{
    const {faculties} = formData;
    console.log("Faculty:", faculties);
    try{
      const response = await axios.post(`${API_URL}/admin/uploadBulkDataOfFaculty`,{
        faculties
      });

      if(response){
        // dispatch(setnirfData(response.data))
        toast.success(response.data.message)
        // dispatch(setFaculty(response.data.faculty));
        // console.log(response.data)
        // navigate("/dashboard/admin/students")
      }

    }catch(error){
      console.error(error);
      toast.error(error.response.data.message)
    }
  }
}

// Get all departments
export function getAllDepartment( navigate){
  return async (dispatch)=>{
    
    try{
      const response = await axios.get(`${API_URL}/getDepartmentData`);

      if(response){
        // dispatch(setnirfData(response.data))
        toast.success(response.data.message)
        dispatch(setDepartment(response.data.departments));
        // navigate("/dashboard/admin/students");
      }

    }catch(error){
      console.error(error);
      toast.error(error.response.data.message)
    }
  }
}


// Get All Programs
export function getAllProgram(formData, navigate){
  return async (dispatch)=>{
    const {departmentID} = formData;
    try{
      const response = await axios.get(`${API_URL}/university/getPrograms?departmentID=${departmentID}`);

      if(response){
        // dispatch(setnirfData(response.data))
        toast.success(response.data.message)
        dispatch(setPrograms(response.data.programs));
        // navigate("/dashboard/admin/students");
      }

    }catch(error){
      console.error(error);
      // toast.error(error.response.data.message)
    }
  }
}