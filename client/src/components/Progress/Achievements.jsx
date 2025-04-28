import React from "react";

const Achievements = () => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Achievements</h2>
        <button className="text-blue-400 text-sm font-medium hover:text-blue-300 cursor-pointer whitespace-nowrap">
          View All
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-900 rounded-lg p-4 text-center">
          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <i className="fas fa-fire text-white text-xl"></i>
          </div>
          <h3 className="font-bold mb-1">7-Day Streak</h3>
          <p className="text-xs text-gray-400">Completed 7 consecutive days</p>
        </div>

        <div className="bg-gray-900 rounded-lg p-4 text-center">
          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
            <i className="fas fa-dumbbell text-white text-xl"></i>
          </div>
          <h3 className="font-bold mb-1">Strength Master</h3>
          <p className="text-xs text-gray-400">Completed 20 strength workouts</p>
        </div>

        <div className="bg-gray-900 rounded-lg p-4 text-center relative overflow-hidden">
          <div className="absolute -top-2 -right-2 bg-blue-600 text-xs py-1 px-2 rounded-lg rotate-12">
            New!
          </div>
          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center">
            <i className="fas fa-heart-pulse text-white text-xl"></i>
          </div>
          <h3 className="font-bold mb-1">Cardio King</h3>
          <p className="text-xs text-gray-400">Burned 5000 calories in cardio</p>
        </div>

        <div className="bg-gray-900 rounded-lg p-4 text-center opacity-60">
          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gray-700 flex items-center justify-center">
            <i className="fas fa-medal text-gray-500 text-xl"></i>
          </div>
          <h3 className="font-bold mb-1">30-Day Streak</h3>
          <p className="text-xs text-gray-400">8/30 days completed</p>
          <div className="w-full bg-gray-800 h-1.5 rounded-full mt-2">
            <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: "27%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;