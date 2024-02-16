import React from "react";

const FacultyTable = ({ faculties }) => {
  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Faculty ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Gender</th>
            {/* <th className="border border-gray-300 px-4 py-2">Email</th> */}
            <th className="border border-gray-300 px-4 py-2">Designation</th>
            <th className="border border-gray-300 px-4 py-2">
              Employment Type
            </th>
            {/* <th className="border border-gray-300 px-4 py-2">Role</th> */}
            {/* <th className="border border-gray-300 px-4 py-2">Approved</th> */}
            <th className="border border-gray-300 px-4 py-2">
              Highest Qualification
            </th>
            <th className="border border-gray-300 px-4 py-2">
              Experience (months)
            </th>
            <th className="border border-gray-300 px-4 py-2">
              Currently Working
            </th>
            <th className="border border-gray-300 px-4 py-2">State</th>
            {/* <th className="border border-gray-300 px-4 py-2">Country</th> */}
          </tr>
        </thead>
        <tbody>
          {faculties.map((faculty) => (
            <tr key={faculty._id}>
              <td className="border border-gray-300  font-semibold text-sm">
                {faculty._id.split(0, 6)}
              </td>
              <td className="border border-gray-300  font-semibold text-sm">
                {faculty.name}
              </td>
              <td className="border border-gray-300 font-semibold text-sm">
                {faculty.gender}
              </td>
              {/* <td className="border border-gray-300 px-4 py-2">{faculty.email}</td> */}
              <td className="border border-gray-300 font-semibold text-sm">
                {faculty.designation}
              </td>
              <td className="border border-gray-300 font-semibold text-sm">
                {faculty.employmentType}
              </td>
              {/* <td className="border border-gray-300 px-4 py-2">{faculty.role}</td> */}
              {/* <td className="border border-gray-300 px-4 py-2">{faculty.approved}</td> */}
              <td className="border border-gray-300 font-semibold text-sm">
                {faculty.highestQualification}
              </td>
              <td className="border border-gray-300 font-semibold text-sm">
                {faculty.experienceInMonth}
              </td>
              <td className="border border-gray-300 font-semibold text-sm">
                {faculty.isCurrentlyWorking ? "Yes" : "No"}
              </td>
              <td className="border border-gray-300 font-semibold text-sm">
                {faculty.state}
              </td>
              {/* <td className="border border-gray-300 px-4 py-2">{faculty.country}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FacultyTable;
