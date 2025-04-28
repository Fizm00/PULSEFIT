import React from "react";

const PersonalRecords = () => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 mb-8">
      <h2 className="text-xl font-bold mb-6">Personal Records</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-900 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
              <i className="fas fa-dumbbell text-purple-400"></i>
            </div>
            <div>
              <h3 className="font-bold">Bench Press</h3>
              <p className="text-xs text-gray-400">Strength</p>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-gray-400 text-xs mb-1">Max Weight</p>
              <p className="text-2xl font-bold">85 kg</p>
            </div>
            <span className="text-green-400 text-xs font-medium flex items-center">
              <i className="fas fa-arrow-up mr-1"></i> 5 kg
            </span>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
              <i className="fas fa-person-running text-blue-400"></i>
            </div>
            <div>
              <h3 className="font-bold">5K Run</h3>
              <p className="text-xs text-gray-400">Cardio</p>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-gray-400 text-xs mb-1">Best Time</p>
              <p className="text-2xl font-bold">22:45</p>
            </div>
            <span className="text-green-400 text-xs font-medium flex items-center">
              <i className="fas fa-arrow-down mr-1"></i> 0:48
            </span>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-4 border border-red-500/30">
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center mr-3">
              <i className="fas fa-bolt text-red-400"></i>
            </div>
            <div>
              <h3 className="font-bold">HIIT Session</h3>
              <p className="text-xs text-gray-400">HIIT</p>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-gray-400 text-xs mb-1">Calories Burned</p>
              <p className="text-2xl font-bold">485</p>
            </div>
            <span className="text-green-400 text-xs font-medium flex items-center">
              <i className="fas fa-arrow-up mr-1"></i> 35
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalRecords;