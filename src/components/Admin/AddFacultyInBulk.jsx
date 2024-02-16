import React from "react";
import FacultyBulkDataUpload from "./FacultyBulkDataUpload";
import FacultyExcelDownloadButton from "./FacultyExcelDownloadButton";

const AddFacultyInBulk = () => {
  return (
    <div className="container mt-8   mx-auto">
      <div className="flex flex-col gap-4">
        <FacultyBulkDataUpload/>
        <FacultyExcelDownloadButton/>
      </div>
    </div>
  );
};

export default AddFacultyInBulk;
