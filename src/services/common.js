import toast from "react-hot-toast";
import axios from "axios";
import { setnirfData, setSchools, setUniversity } from '../slices/Admin';
const API_URL = "http://localhost:4000/api/v1";


// Get Data For Nirf Ranking
export function getDataForNirfRanking(){
    return async (dispatch)=>{
      try{
        const response = await axios.get(`${API_URL}/getDataForNirfRanking`);
  
        if(response){
          dispatch(setnirfData(response.data))
        //   toast.success("Data Fetched Successfully")
          console.log("NIRF Data: ", response.data)
        }
  
      }catch(error){
        console.error(error);
      }
    }
  }

  // Get Data For Nirf Ranking
export function getUniversityData(){
  return async (dispatch)=>{
    try{
      const response = await axios.get(`${API_URL}/getUniversityData`);

      if(response){
        dispatch(setUniversity(response.data.university))
      //   toast.success("Data Fetched Successfully")
        console.log("University Data: ", response.data.university)
      }

    }catch(error){
      console.error(error);
    }
  }
}

  // 
  export function getSchools(){
    return async (dispatch)=>{
      try{
        const response = await axios.get(`${API_URL}/getSchools`);
  
        if(response){
          dispatch(setSchools(response.data.schools))
        //   toast.success("Data Fetched Successfully")
          console.log("Schools: ", response.data.schools)
        }
  
      }catch(error){
        console.error(error);
      }
    }
  }
  