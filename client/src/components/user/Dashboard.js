import React, {useState} from 'react'
import { Routes, Route, useParams, Outlet } from 'react-router-dom';
import DashboardSidebar from "../shared/DashboardSidebar"
import DashboardHeader from '../shared/DashboardHeader'
import DashboardLanding from "../user/components/DashboardLanding"
import { format, add } from 'date-fns';
import { IoCalendarOutline } from 'react-icons/io5';
import { MdEvent } from 'react-icons/md';
import CalendarComponent from "./components/CalendarComponent"
import Events from './components/Events';


export default function Dashboard() {

  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [state, setState] = useState('Dashboard');

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };



 

  return (

    

    <div className='flex flex-col min-h-screen'>
    {/* Header Navbar */}
    <div className='flex-none'>
      <DashboardHeader 
        isCollapsed={isSidebarCollapsed} 
        setSidebarCollapsed={setSidebarCollapsed} 
      />
    </div>
    
    {/* Main content with sidebar and main view */}
    <div className='flex flex-1'>
      <div className={`transition-all duration-300 ${isSidebarCollapsed ? 'w-16' : 'w-64'} bg-dash`}>
        <DashboardSidebar isCollapsed={isSidebarCollapsed} />
      </div>
      {/* you can add here marging according to collapse */}
      <div className={`flex-1 text-white bg-gray-500 p-4 transition-all duration-300 `}>

      <Outlet/>
    

      </div>
    </div>
  </div>
   
   
  )
}
