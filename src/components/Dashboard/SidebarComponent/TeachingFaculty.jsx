import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
// import { IoIosInformationCircle } from "react-icons/io";
import { MdCastForEducation } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { GiArchiveResearch } from "react-icons/gi";
import { HiAcademicCap } from "react-icons/hi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { GrProjects } from "react-icons/gr";
import { RiMiniProgramFill, RiProfileFill } from "react-icons/ri";
import { SiPrivateinternetaccess } from "react-icons/si";
import { FaPlaceOfWorship } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { sidebarTabsForTeachingFaculty } from "../../../utility/sidebar";
import { RamenDiningRounded } from "@mui/icons-material";

const TeachingFaculty = ({ isExpanded }) => {
  return (
    <ul>
      {sidebarTabsForTeachingFaculty.map((tab, index) => {
        return (
          <li key={index} className="mb-4 font-semibold text-black">
            <Link to={tab.url} className="flex items-center hover:text-gray-500">
              <span className="mr-2 text-blue-500 font-semibold text-3xl">
                {tab.title === "Dashboard" ? (
                  <MdDashboard />
                ) : tab.title === "Biographical Info" ? (
                  <IoMdInformationCircleOutline />
                ) : tab.title === "Educational Background" ? (
                  <MdCastForEducation />
                ) : tab.title === "Teaching Experience" ? (
                  <GiTeacher />
                ) : tab.title === "Research Interest" ? (
                  <GiArchiveResearch />
                ) : tab.title === "Professional Experience" ? (
                  <HiAcademicCap />
                ) : tab.title === "Courses Taught" ? (
                  <LiaChalkboardTeacherSolid />
                ) : tab.title === "Collaborative Projects" ? (
                  <GrProjects />
                ) : (
                  tab.title === "Student" || tab.title === "Faculty" ? <RiProfileFill/> : <RamenDiningRounded/>
                )}
              </span>
              {isExpanded && <span>{tab.title}</span>}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TeachingFaculty;
