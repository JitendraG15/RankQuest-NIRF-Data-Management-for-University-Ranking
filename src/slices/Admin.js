import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react-dom/test-utils";

const initialState = {
  nirfData: {},
  university: {},
  schools: [],
  departments:[],
  programs:[],
  faculties: [],
  faculty: {},
  students: [],
  student: {},
};

const profileSlice = createSlice({
  name: "admin",
  initialState: initialState,
  reducers: {
    setnirfData(state, action) {
      state.nirfData = action.payload;
    },
    setSchools(state, action) {
      state.schools = action.payload;
    },
    setDepartment(state, action) {
      state.departments = action.payload;
    },
    setPrograms(state, action) {
      state.programs = action.payload;
    },
    setUniversity(state, action) {
      state.university = action.payload;
    },
    setFaculties(state, action) {
      state.faculties = action.payload;
    },
    setFaculty(state, action) {
      state.faculty = action.payload;
    },
    setStudents(state, action) {
      state.students = action.payload;
    },
    setStudent(state, action) {
      state.student = action.payload;
    },
  },
});

export const {
  setnirfData,
  setUniversity,
  setSchools,
  setFaculties,
  setFaculty,
  setStudents,
  setStudent,
  setDepartment,
  setPrograms
} = profileSlice.actions;

export default profileSlice.reducer;
