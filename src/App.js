import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Dashboard/Navbar";
import UserProfile from "./pages/UserProfile";
import PersonalDetails from "./pages/Student/PersonalDetails";
import AdmissionDetails from "./pages/Student/AdmissionDetails";
import ProgramDetails from "./pages/Student/ProgramDetails";
import InternshipDetails from "./pages/Student/InternshipDetails";
import PlacementDetails from "./pages/Student/PlacementDetails";
import OTPVerfication from "./pages/OTPVerfication";
import GeDataForNIRF from "./pages/NIRF/GeDataForNIRF";
import TeachingExperienceFaculty from "./pages/Faculty/TeachingExperienceFaculty";
import StudentProfile from "./pages/Student/StudentProfile";
import EducationDetailsFaculty from "./pages/Faculty/EducationDetailsFaculty";
import PersonalDetailsFaculty from "./pages/Faculty/PersonalDetailsFaculty";
import ResearchInterest from "./pages/Faculty/ResearchInterest";
import AddEntry from "./pages/Admin/AddEntry";
import ChangePassword from "./pages/Common/ChangePassword";
import UniversityData from "./pages/Common/UniversityData";
import Departments from "./components/Dashboard/University/Departments";
import Faculties from "./pages/Admin/Faculties";
import FacultyDetails from "./components/Admin/FacultyDetails";
import Students from "./pages/Admin/Students";
import StudentProfilePage from "./components/Admin/StudentProfilePage";
import UpdateEntity from "./pages/Admin/UpdateEntity";
import AddFacultyPage from "./pages/Faculty/AddFaculty";

function App() {
  return (
    <>
      {/* Creating Routes */}
      <div className="static">
        <Navbar />
        {/* <NavigationBar/> */}
      </div>

      <Routes>
        {/* <Route path="/" element={<Demo />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/verifyOTP" element={<OTPVerfication/>} />
        <Route path="/dashboard" element={<UserProfile />} />
        <Route path="/dashboard/personalInfo" element={<PersonalDetails/>} />
        <Route path="/dashboard/admissionDetails" element={<AdmissionDetails/>} />
        <Route path="/dashboard/programDetails" element={<ProgramDetails/>} />
        <Route path="/dashboard/internshipDetails" element={<InternshipDetails/>} />
        <Route path="/dashboard/placementDetails" element={<PlacementDetails/>} />
        <Route path="/dashboard/studentProfile" element={<StudentProfile/>}/>
        <Route path="/dashboard/teachingFaculty/experience" element={<TeachingExperienceFaculty/>} />
        <Route path="/dashboard/teachingFaculty/educationalInfo" element={<EducationDetailsFaculty/>}/>
        <Route path="/dashboard/teachingFaculty/bio" element={<PersonalDetailsFaculty/>}/>
        <Route path="/dashboard/teachingFaculty/ResearchInterest" element={<ResearchInterest/>}/>
        <Route path="/nirf" element={<GeDataForNIRF/>} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/universityData" element={<UniversityData/>} />
        <Route path="/universityData/school/departments" element={<Departments />} />
        <Route path="/dashboard/admin/faculty" element={<Faculties />} />
        <Route path="/dashboard/admin/facultyProfile/:userId" element={<FacultyDetails />} />
        <Route path="/dashboard/admin/students" element={<Students/>} />
        <Route path="/dashboard/admin/studentProfile/:userId" element={<StudentProfilePage />} />
        <Route path="/dashboard/admin/updateEntity" element={<UpdateEntity/>} />
        <Route path="/dashboard/admin/addFaculty" element={<AddFacultyPage/>}/>


        {/* Admin Route */}
        <Route path="/admin/addEntry" element={<AddEntry/>} />
      </Routes>
    </>
  );
}

export default App;
