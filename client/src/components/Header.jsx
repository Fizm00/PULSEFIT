import React, { useState } from "react";

const Header = ({ activeTab, setActiveTab }) => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  // Toggle profile dropdown
  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            PULSE<span className="text-blue-400">FIT</span>
          </h1>
        </div>

        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`cursor-pointer whitespace-nowrap py-2 px-1 border-b-2 ${
              activeTab === "dashboard"
                ? "border-blue-500 text-blue-400"
                : "border-transparent hover:text-blue-400"
            } transition-all duration-200`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab("workouts")}
            className={`cursor-pointer whitespace-nowrap py-2 px-1 border-b-2 ${
              activeTab === "workouts"
                ? "border-blue-500 text-blue-400"
                : "border-transparent hover:text-blue-400"
            } transition-all duration-200`}
          >
            Workouts
          </button>
          <button
            onClick={() => setActiveTab("schedule")}
            className={`cursor-pointer whitespace-nowrap py-2 px-1 border-b-2 ${
              activeTab === "schedule"
                ? "border-blue-500 text-blue-400"
                : "border-transparent hover:text-blue-400"
            } transition-all duration-200`}
          >
            Schedule
          </button>
          <button
            onClick={() => setActiveTab("progress")}
            className={`cursor-pointer whitespace-nowrap py-2 px-1 border-b-2 ${
              activeTab === "progress"
                ? "border-blue-500 text-blue-400"
                : "border-transparent hover:text-blue-400"
            } transition-all duration-200`}
          >
            Progress
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full text-blue-400 cursor-pointer whitespace-nowrap !rounded-button">
            <i className="fas fa-bell"></i>
          </button>
          <div className="relative">
            <button
              onClick={toggleProfileDropdown}
              className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded-full cursor-pointer whitespace-nowrap !rounded-button"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <i className="fas fa-user-astronaut text-white"></i>
              </div>
              <span className="hidden md:inline">Alex</span>
              <i
                className={`fas fa-chevron-down text-xs transition-transform duration-200 ${
                  showProfileDropdown ? "rotate-180" : ""
                }`}
              ></i>
            </button>

            {showProfileDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl py-1 z-50">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-700 cursor-pointer"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-700 cursor-pointer"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-700 cursor-pointer"
                >
                  Help
                </a>
                <div className="border-t border-gray-700 my-1"></div>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-700 text-red-400 cursor-pointer"
                >
                  Sign Out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;