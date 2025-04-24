import React from "react";

const MobileNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 z-50">
      <div className="flex justify-around">
        <button
          onClick={() => setActiveTab("dashboard")}
          className={`flex flex-col items-center py-3 px-5 cursor-pointer whitespace-nowrap !rounded-button ${
            activeTab === "dashboard" ? "text-blue-400" : "text-gray-400"
          }`}
        >
          <i className="fas fa-home text-lg"></i>
          <span className="text-xs mt-1">Dashboard</span>
        </button>
        <button
          onClick={() => setActiveTab("workouts")}
          className={`flex flex-col items-center py-3 px-5 cursor-pointer whitespace-nowrap !rounded-button ${
            activeTab === "workouts" ? "text-blue-400" : "text-gray-400"
          }`}
        >
          <i className="fas fa-dumbbell text-lg"></i>
          <span className="text-xs mt-1">Workouts</span>
        </button>
        <button
          onClick={() => setActiveTab("schedule")}
          className={`flex flex-col items-center py-3 px-5 cursor-pointer whitespace-nowrap !rounded-button ${
            activeTab === "schedule" ? "text-blue-400" : "text-gray-400"
          }`}
        >
          <i className="fas fa-calendar-alt text-lg"></i>
          <span className="text-xs mt-1">Schedule</span>
        </button>
        <button
          onClick={() => setActiveTab("progress")}
          className={`flex flex-col items-center py-3 px-5 cursor-pointer whitespace-nowrap !rounded-button ${
            activeTab === "progress" ? "text-blue-400" : "text-gray-400"
          }`}
        >
          <i className="fas fa-chart-line text-lg"></i>
          <span className="text-xs mt-1">Progress</span>
        </button>
      </div>
    </div>
  );
};

export default MobileNavigation;