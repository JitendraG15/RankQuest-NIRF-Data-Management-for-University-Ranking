import React from "react";
import { useEffect } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import Schools from "../../components/Dashboard/University/Schools";
import UniversityDetails from "../../components/Dashboard/University/UniversityDetails";
import { getUniversityData } from "../../services/common";

const UniversityData = () => {
  const dispatch = useDispatch();
  const { isCollapsed } = useSelector((state) => state.sidebar);
  const { university } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getUniversityData());
  }, []);
  return (
    <div className="flex relative -z-50">
      <div className={`absolute left-0 `}>
        <Sidebar />
      </div>

      <div
        className={`min-h-screen absolute top-[30%] ${
          isCollapsed ? "w-[81%] left-[19%]" : "w-[95.5%] left-[4.5%]"
        }   `}
      >
        <div className="flex flex-col items-start pl-5">
          <div className="w-full m-auto pl-10">
            {/* University Data */}
            <UniversityDetails university={university} />
          </div>

          {/* Schools Data */}
          <div className="w-full mx-auto">
            <Schools />
          </div>

          {/* Department Data */}

          {/* Program Data */}
        </div>
      </div>
    </div>
  );
};

export default UniversityData;
