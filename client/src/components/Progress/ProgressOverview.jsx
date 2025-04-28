import React from "react";

const ProgressOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-gray-800 rounded-xl p-6 flex items-center">
        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
          <i className="fas fa-dumbbell text-blue-400 text-xl"></i>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Total Workouts</p>
          <div className="flex items-center">
            <h3 className="text-2xl font-bold mr-2">48</h3>
            <span className="text-green-400 text-xs font-medium flex items-center">
              <i className="fas fa-arrow-up mr-1"></i> 12%
            </span>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-6 flex items-center">
        <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
          <i className="fas fa-fire-flame-curved text-purple-400 text-xl"></i>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Current Streak</p>
          <div className="flex items-center">
            <h3 className="text-2xl font-bold mr-2">8 days</h3>
            <span className="text-green-400 text-xs font-medium flex items-center">
              <i className="fas fa-arrow-up mr-1"></i> 3
            </span>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-6 flex items-center">
        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mr-4">
          <i className="fas fa-calendar-check text-green-400 text-xl"></i>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Monthly Active Days</p>
          <div className="flex items-center">
            <h3 className="text-2xl font-bold mr-2">18/30</h3>
            <span className="text-green-400 text-xs font-medium flex items-center">
              <i className="fas fa-arrow-up mr-1"></i> 4
            </span>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-6 flex items-center">
        <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mr-4">
          <i className="fas fa-clock text-red-400 text-xl"></i>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Avg. Workout Duration</p>
          <div className="flex items-center">
            <h3 className="text-2xl font-bold mr-2">42 min</h3>
            <span className="text-green-400 text-xs font-medium flex items-center">
              <i className="fas fa-arrow-up mr-1"></i> 5 min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressOverview;