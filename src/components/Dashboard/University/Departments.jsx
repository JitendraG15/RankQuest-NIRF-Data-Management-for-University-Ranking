import React from 'react'
import Sidebar from '../Sidebar'
import { useSelector } from 'react-redux'


const Departments = ({schoolID}) => {
    const {isCollapsed} = useSelector((state) => state.sidebar)
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
        <div className='min-h-screen w-full'>
          departments
        </div>
      </div>
    </div>
  )
}

export default Departments
