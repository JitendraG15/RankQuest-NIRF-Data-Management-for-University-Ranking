import React from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import { getDataForNirfRanking } from "../../services/common";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import FacultyTable from "../../components/Admin/FacultyTable";
// import { Button } from "bootstrap";
import { getAllTeachingFaculty } from "../../services/Admin/Admin";

const GeDataForNIRF = () => {
  const dispatch = useDispatch();
  const { isCollapsed } = useSelector((state) => state.sidebar);
  const { nirfData, faculties } = useSelector((state) => state.admin);

  const renderTitleRowStudent = () => {
    return Object.keys(nirfData).map((key) => (
      <td key={key} className="py-2 px-4 font-bold bg-gray-200">
        {key}
      </td>
    ));
  };

  const renderValueRow = () => {
    return Object.values(nirfData).map((value, index) => (
      <td key={index} className="py-2 px-4 bg-gray-100">
        {value}
      </td>
    ));
  };

  const handleOnClick = async () => {
    dispatch(getAllTeachingFaculty());
  };

  useEffect(() => {
    dispatch(getDataForNirfRanking());
  }, []);
  return (
    <div className="flex relative -z-50">
      <div className={`absolute left-0 `}>
        <Sidebar />
      </div>

      <div
        className={`min-h-screen absolute top-[30%]  ${
          isCollapsed ? "w-[81%] left-[19%]" : "w-[95.5%] left-[4.5%]"
        } text-center `}
      >
        <div className="flex flex-col items-start  absolute pl-9">
          {/* Student Data */}
          <div className=" w-full m-auto">
            <div>
              {nirfData ? (
                <div className="max-w-screen-md mx-auto mt-8">
                  <h1 className="text-2xl font-bold mb-4">
                    DATA FOR NIRF RANKING
                  </h1>

                  <div className="flex items-start flex-col p-2">
                    <h2 className="font-semibold text-xl py-2">Student Data</h2>
                    <table className="min-w-full bg-white border border-gray-300">
                      <tbody>
                        <tr>{renderTitleRowStudent()}</tr>
                        <tr>{renderValueRow()}</tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div>No Data To Display</div>
              )}
            </div>
          </div>

          {/* Faculty Data */}
          <div className="-ml-5 ">
            <div>
              {faculties.length > 0 ? (
                <div className="max-w-screen-md mx-auto mt-8">
                  <div className="flex items-start flex-col p-2">
                    <h2 className="font-semibold text-xl pt-2 pl-3">Faculty Data</h2>
                    <FacultyTable faculties={faculties} />
                  </div>
                </div>
              ) : (
                <div className="pl-8 ">
                  <button
                    onClick={handleOnClick}
                    className="text-white bg-blue-500 text-sm font-semibold p-1 rounded-sm drop-shadow-2xl "
                  >
                    Get Faculty Data
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeDataForNIRF;
