import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi";
import { sidebarTabsForMedicalOfficer } from "../../../utility/sidebar";

const MedicalOfficer = ({ isExpanded }) => {
  return (
    <ul>
      {sidebarTabsForMedicalOfficer.map((tab, index) => {
        return (
          <li key={index} className="mb-4 font-semibold text-black">
            <Link to={tab.url} className="flex items-center hover:text-gray-500">
              <span className="mr-2 text-blue-500 font-semibold text-3xl">
                {tab.title === "Dashboard" ? (
                  <MdDashboard />
                ) : (
                  <HiAcademicCap />
                )}
              </span>
              {isExpanded && <span>{tab.title}</span>}
            </Link>
          </li>
        );
      })}
    </ul>
  )
}

export default MedicalOfficer
