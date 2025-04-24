import React from "react";

const CalendarHeader = ({ viewMode, setViewMode }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Workout Schedule</h1>
        <p className="text-gray-400">Plan and manage your fitness routine</p>
      </div>
      <div className="flex space-x-2 mt-4 md:mt-0">
        <button 
          onClick={() => setViewMode('weekly')}
          className={`py-2 px-4 rounded-lg text-sm font-medium ${
            viewMode === 'weekly' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
          }`}
        >
          Weekly
        </button>
        <button 
          onClick={() => setViewMode('monthly')}
          className={`py-2 px-4 rounded-lg text-sm font-medium ${
            viewMode === 'monthly' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
          }`}
        >
          Monthly
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;