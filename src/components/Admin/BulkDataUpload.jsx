import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { insertStudentsInBulk } from "../../services/Admin/Admin";

const BulkDataUpload = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [uploadedFile, setUploadedFile] = useState(null);
  const [excelData, setExcelData] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedFile(file);

    // Read the Excel file
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      // Assuming the first sheet is the one you want to access
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      // Convert sheet data to JSON
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      setExcelData(jsonData);
      console.log("Excel Data:", jsonData[0]);
    };

    reader.readAsBinaryString(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: ".xlsx, .xls",
    onDrop,
  });

  const handleClick = async () => {
    try {
      const formData = {students:excelData}
      console.log("Excel Data:", excelData)
      dispatch(insertStudentsInBulk(formData, navigate));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center -mt-10">
      <div
        {...getRootProps()}
        className={`p-8 border-dashed border-2 rounded-md ${
          isDragActive ? "border-blue-500" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        <p className="text-gray-500">
          {isDragActive
            ? "Drop the Excel file here"
            : "Drag 'n' drop an Excel file here, or click to select one"}
        </p>
      </div>

      {uploadedFile && (
        <div className="mt-4">
          <p className="text-green-500">File uploaded: {uploadedFile.name}</p>
          <button onClick={handleClick} className="bg-blue-500 text-white font-semibold text-sm p-2 rounded shadow-md">Make Entry In Database</button>
        </div>
      )}
    </div>
  );
};

export default BulkDataUpload;
