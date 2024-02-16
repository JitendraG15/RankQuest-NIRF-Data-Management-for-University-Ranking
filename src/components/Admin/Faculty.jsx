import React from 'react'
import { Link } from 'react-router-dom'

const Faculty = ({key, faculty}) => {
    
  return (
    <tr className="bg-white hover:bg-gray-100 transition-all">
      <td className="border px-4 py-2 text-sm text-blue-500 font-semibold"><Link to={`/dashboard/admin/facultyProfile/${faculty._id}`}>{faculty.name}</Link> </td>
      <td className="border px-4 py-2 text-sm">{faculty.designation}</td>
      <td className="border px-4 py-2 text-sm">{faculty.gender}</td>
      <td className="border px-4 py-2 text-sm">{faculty.email}</td>
      <td className="border px-4 py-2 text-sm">{faculty.highestQualification}</td>
      <td className="border px-4 py-2 text-sm">{faculty.experienceInMonth} months</td>
      <td className="border px-4 py-2 text-sm">{faculty.state}</td>
      {/* <td className="border px-4 py-2 text-sm">{faculty.country}</td> */}
    </tr>
  )
}

export default Faculty
