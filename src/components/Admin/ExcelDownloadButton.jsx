import React from "react";
import * as XLSX from "xlsx";

const ExcelDownloadButton = () => {

const downloadExcelFile = () => {
    // Example data
    const data = [
      ["name", "rollNumber", "email", "gender", "actualCategory", "state","city", "country", "isEconomicallyAndSocialyChallenged","isGettingFeeReimbursement", "isCompletedInStipulatedTime", "enrollmentYear"],
      // ["Jitendra Gupta", 25, "India"],
      // ["Naveen Kumar Meena", 24, "India"],
    ];
  
    // Create a new workbook
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(data);
  
    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  
    // Generate a binary string from the workbook
    const excelBinaryString = XLSX.write(workbook, { bookType: "xlsx", mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", type: "binary" });
  
    // Convert the binary string to a blob
    const blob = new Blob([s2ab(excelBinaryString)], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  
    // Create a download link and trigger the download
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "StudentExcelDataUploadFormat.xlsx";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  // Utility function to convert a string to an ArrayBuffer
  function s2ab(s) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) {
      view[i] = s.charCodeAt(i) & 0xFF;
    }
    return buf;
  }
  

  return <button onClick={downloadExcelFile} className=" bg-blue-100 shadow-lg p-2 font-semibold hover:bg-gray-200 text-black">Download Excel File For Student Data Format </button>;
};

export default ExcelDownloadButton;
