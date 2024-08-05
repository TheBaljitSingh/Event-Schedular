import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaChartBar, FaCalendarAlt, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-full fixed top-0 left-0 z-30">
      <div className="p-4">
        <h1 className="text-2xl font-bold">EventScheduler</h1>
      </div>
      <nav className="mt-6">
        <ul>
          <li>
            <Link to="/dashboard/home" className="flex items-center p-4 hover:bg-gray-700 transition duration-200">
              <FaHome className="w-6 h-6 mr-3" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/events" className="flex items-center p-4 hover:bg-gray-700 transition duration-200">
              <FaCalendarAlt className="w-6 h-6 mr-3" />
              <span>Events</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/profile" className="flex items-center p-4 hover:bg-gray-700 transition duration-200">
              <FaUser className="w-6 h-6 mr-3" />
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/settings" className="flex items-center p-4 hover:bg-gray-700 transition duration-200">
              <FaCog className="w-6 h-6 mr-3" />
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/reports" className="flex items-center p-4 hover:bg-gray-700 transition duration-200">
              <FaChartBar className="w-6 h-6 mr-3" />
              <span>Reports</span>
            </Link>
          </li>
          <li>
            <Link to="/logout" className="flex items-center p-4 hover:bg-gray-700 transition duration-200">
              <FaSignOutAlt className="w-6 h-6 mr-3" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
