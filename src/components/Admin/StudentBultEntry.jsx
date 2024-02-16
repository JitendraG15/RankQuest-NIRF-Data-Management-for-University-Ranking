import React from "react";
import ExcelDownloadButton from "./ExcelDownloadButton";
import BulkDataUpload from "./BulkDataUpload";

const StudentBultEntry = () => {
  return (
    <div className="container mt-8   mx-auto">
      <div className="flex flex-col gap-4">
        <BulkDataUpload />
        <ExcelDownloadButton />
      </div>
    </div>
  );
};

export default StudentBultEntry;
