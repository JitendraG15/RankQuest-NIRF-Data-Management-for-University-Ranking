import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { IoIosInformationCircle } from "react-icons/io";
import { HiAcademicCap } from "react-icons/hi";
import { RiMiniProgramFill } from "react-icons/ri";
import { SiPrivateinternetaccess } from "react-icons/si";
import { FaPlaceOfWorship } from "react-icons/fa";
import { sidebarTabsForRegistrar } from "../../../utility/sidebar";
import { FaWpforms } from "react-icons/fa";

const Registrar = ({ isExpanded }) => {
  return (
    <ul>
      {sidebarTabsForRegistrar.map((tab, index) => {
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

export default Registrar
