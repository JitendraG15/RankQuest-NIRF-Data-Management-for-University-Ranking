import React from 'react'
import { Link } from 'react-router-dom'

const Student = ({key, student}) => {
  return (
    <tr className="bg-white hover:bg-gray-100 transition-all">
      <td className="border px-4 py-2 text-sm text-blue-500 font-semibold"><Link to={`/dashboard/admin/studentProfile/${student._id}`}>{student.name}</Link> </td>
      <td className="border px-4 py-2 text-sm">{student.rollNumber}</td>
      <td className="border px-4 py-2 text-sm">{student.gender}</td>
      <td className="border px-4 py-2 text-sm">{student.email}</td>
      <td className="border px-4 py-2 text-sm">{student.phoneNumber}</td>
      <td className="border px-4 py-2 text-sm">{student.role}</td>
      <td className="border px-4 py-2 text-sm">{student.fatherName}</td>
      {/* <td className="border px-4 py-2 text-sm">{faculty.country}</td> */}
    </tr>
  )
}

export default Student
