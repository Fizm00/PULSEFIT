import React, { useState } from "react";
import ProgressOverview from "../components/Progress/ProgressOverview";
import WeightTracking from "../components/Progress/WeightTracking";
import WorkoutPerformance from "../components/Progress/WorkoutPerformance";
import PersonalRecords from "../components/Progress/PersonalRecords";
import Achievements from "../components/Progress/Achievements";
import WorkoutHistory from "../components/Progress/WorkoutHistory";
import GoalTracking from "../components/Progress/GoalTracking";

const Progress = () => {
  const [workoutTypeFilter, setWorkoutTypeFilter] = useState("All");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [dateRange, setDateRange] = useState("1M");

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Fitness Progress</h1>
          <p className="text-gray-400">Track your fitness journey and achievements</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-2">
          <div className="relative">
            <button 
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
              className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded-lg text-sm cursor-pointer whitespace-nowrap"
            >
              <i className="fas fa-filter"></i>
              <span>{workoutTypeFilter}</span>
              <i className={`fas fa-chevron-down text-xs transition-transform duration-200 ${showFilterDropdown ? 'rotate-180' : ''}`}></i>
            </button>
            {showFilterDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl py-1 z-10">
                {['All', 'HIIT', 'Strength', 'Cardio', 'Yoga', 'Pilates'].map((type) => (
                  <button 
                    key={type}
                    onClick={() => {
                      setWorkoutTypeFilter(type);
                      setShowFilterDropdown(false);
                    }}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-700 cursor-pointer ${
                      workoutTypeFilter === type ? 'text-blue-400' : ''
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg text-sm font-medium cursor-pointer whitespace-nowrap">
            Export Data
          </button>
        </div>
      </div>

      {/* Progress Components */}
      <ProgressOverview />
      <WeightTracking dateRange={dateRange} setDateRange={setDateRange} />
      <WorkoutPerformance workoutTypeFilter={workoutTypeFilter} dateRange={dateRange} />
      <PersonalRecords />
      <Achievements />
      <WorkoutHistory />
      <GoalTracking />
    </div>
  );
};

export default Progress;