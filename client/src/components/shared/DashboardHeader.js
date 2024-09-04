import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";

export default function DashboardHeader({isCollapsed, setSidebarCollapsed}) {

  
  const toggleSidebar = () => {
    setSidebarCollapsed(!isCollapsed);
  };

  return (


    <header className="sticky top-0 z-50 bg-dash shadow-lg text-white w-full py-4 transition duration-100">

    <nav className=" px-2 md:px-14">
      <div className='flex flex-row justify-start items-start space-x-5'>
      <IoMdMenu size={42} onClick={toggleSidebar} className='hover:cursor-pointer  hover:bg-slate-700 rounded-full p-2'/>
          <div className="text-2xl font-bold mt-1">
        eventSchedular
      </div>

      </div>
      
      
  
    </nav>
  </header>
  

  )
}
