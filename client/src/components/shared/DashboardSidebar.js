import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaVideo, FaChartBar, FaComment, FaClosedCaptioning, FaDollarSign, FaPaintBrush, FaCog } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { LuLogOut } from 'react-icons/lu';

const Sidebar = ({ isCollapsed }) => {
  const [isActive, setIsActive] = useState("Dashboard");

  const handleButtonColour = (button) => {
    setIsActive(button);
  };

  return (
    <div className="flex flex-1">
      <aside className={`transition-all duration-100 ${isCollapsed ? 'w-16' : 'w-64'} z-30 bg-dash sticky border-gray-600 border-r text-white top-0 left-0`}>
        {isCollapsed ? (
          <nav className=' mt-2 flex flex-col'>
            <div className="ml-2 w-16 h-full bg-gray-800 text-white flex flex-col items-center py-4">
              <ul className="flex flex-col items-center space-y-6">
                <li>
                  <Link onClick={() => handleButtonColour("Dashboard")} to="/dashboard">
                    <FaChartBar className={`text-2xl cursor-pointer hover:text-gray-400 ${isActive === "Dashboard" ? "text-gray-400" : ""}`} />
                  </Link>
                </li>
                <li>
                  <Link onClick={() => handleButtonColour("Events")} to="/dashboard/events">
                    <FaVideo className={`text-2xl cursor-pointer hover:text-gray-400 ${isActive === "Events" ? "text-gray-400" : ""}`} />
                  </Link>
                </li>
                <li>
                  <Link onClick={() => handleButtonColour("Profile")} to="/dashboard/me">
                    <FaComment className={`text-2xl cursor-pointer hover:text-gray-400 ${isActive === "Profile" ? "text-gray-400" : ""}`} />
                  </Link>
                </li>
                <li>
                  <Link onClick={() => handleButtonColour("Profit")} to="/dashboard/subtitles">
                    <FaClosedCaptioning className={`text-2xl cursor-pointer hover:text-gray-400 ${isActive === "Profit" ? "text-gray-400" : ""}`} />
                  </Link>
                </li>
                <li>
                  <Link onClick={() => handleButtonColour("Earning")} to="/dashboard/earn">
                    <FaDollarSign className={`text-2xl cursor-pointer hover:text-gray-400 ${isActive === "Earning" ? "text-gray-400" : ""}`} />
                  </Link>
                </li>
                <li>
                  <Link onClick={() => handleButtonColour("Feedback")} to="/dashboard/feedback">
                    <FaPaintBrush className={`text-2xl cursor-pointer hover:text-gray-400 ${isActive === "Feedback" ? "text-gray-400" : ""}`} />
                  </Link>
                </li>
                <li>
                  <Link onClick={() => handleButtonColour("Settings")} to="/dashboard/settings">
                    <FaCog className={`text-2xl cursor-pointer hover:text-gray-400 ${isActive === "Settings" ? "text-gray-400" : ""}`} />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        ) : (
          <nav>
            <div className="flex flex-col items-center justify-between pt-6">
              <img
                src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
              <p className="mt-4 text-white text-lg font-semibold">Baljit Singh</p>
            </div>

            <div className='mt-2 overflow-y-auto max-h-screen'>
              <ul>
                <li>
                  <Link
                    onClick={() => handleButtonColour("Dashboard")}
                    to="/dashboard"
                    className={`flex items-center p-4 ${isActive === "Dashboard" ? "bg-gray-700" : ""} rounded-lg hover:bg-gray-700 transition duration-200`}
                  >
                    <MdDashboard className="w-6 h-6 mr-3" />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => handleButtonColour("Events")}
                    to="/dashboard/events"
                    className={`flex items-center p-4 ${isActive === "Events" ? "bg-gray-700" : ""} rounded-lg hover:bg-gray-700 transition duration-200`}
                  >
                    <FaVideo className="w-6 h-6 mr-3" />
                    <span>Events</span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => handleButtonColour("Analytics")}
                    to="/dashboard/analytics"
                    className={`flex items-center p-4 ${isActive === "Analytics" ? "bg-gray-700" : ""} rounded-lg hover:bg-gray-700 transition duration-200`}
                  >
                    <FaChartBar className="w-6 h-6 mr-3" />
                    <span>Analytics</span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => handleButtonColour("Profile")}
                    to="/dashboard/me"
                    className={`flex items-center p-4 ${isActive === "Profile" ? "bg-gray-700" : ""} rounded-lg hover:bg-gray-700 transition duration-200`}
                  >
                    <FaComment className="w-6 h-6 mr-3" />
                    <span>Profile</span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => handleButtonColour("Profit")}
                    to="/dashboard/subtitles"
                    className={`flex items-center p-4 ${isActive === "Profit" ? "bg-gray-700" : ""} rounded-lg hover:bg-gray-700 transition duration-200`}
                  >
                    <FaClosedCaptioning className="w-6 h-6 mr-3" />
                    <span>Profit</span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => handleButtonColour("Earning")}
                    to="/dashboard/earn"
                    className={`flex items-center p-4 ${isActive === "Earning" ? "bg-gray-700" : ""} rounded-lg hover:bg-gray-700 transition duration-200`}
                  >
                    <FaDollarSign className="w-6 h-6 mr-3" />
                    <span>Earning</span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => handleButtonColour("Feedback")}
                    to="/dashboard/feedback"
                    className={`flex items-center p-4 ${isActive === "Feedback" ? "bg-gray-700" : ""} rounded-lg hover:bg-gray-700 transition duration-200`}
                  >
                    <FaPaintBrush className="w-6 h-6 mr-3" />
                    <span>Send Feedback</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-between border-t border-gray-600">
              <ul>
                <li>
                  <Link
                    onClick={() => handleButtonColour("Settings")}
                    to="/dashboard/settings"
                    className={`flex items-center p-4 ${isActive === "Settings" ? "bg-gray-700" : ""} rounded-lg hover:bg-gray-700 transition duration-200`}
                  >
                    <FaCog className="w-6 h-6 mr-3" />
                    <span>Settings</span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => handleButtonColour("Logout")}
                    to="/dashboard/logout"
                    className={`flex items-center p-4 ${isActive === "Logout" ? "bg-gray-700" : ""} rounded-lg hover:bg-gray-700 transition duration-200`}
                  >
                    <LuLogOut className="w-6 h-6 mr-3" size={24} />
                    <span>Logout</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        )}
      </aside>
    </div>
  );
};

export default Sidebar;
