import React, { useState } from "react";

const WorkoutHistory = () => {
  const [displayCount, setDisplayCount] = useState(5);

  const workoutData = [
    {
      date: "Apr 24, 2025",
      name: "Morning HIIT",
      type: "HIIT",
      typeColor: "red",
      duration: "30 min",
      performance: 8,
      performanceImproved: true,
    },
    {
      date: "Apr 24, 2025",
      name: "Yoga Flow",
      type: "Yoga",
      typeColor: "green",
      duration: "45 min",
      performance: 5,
      performanceImproved: true,
    },
    {
      date: "Apr 23, 2025",
      name: "Upper Body Strength",
      type: "Strength",
      typeColor: "purple",
      duration: "45 min",
      performance: 10,
      performanceImproved: true,
    },
    {
      date: "Apr 21, 2025",
      name: "Running Session",
      type: "Cardio",
      typeColor: "blue",
      duration: "40 min",
      performance: 3,
      performanceImproved: true,
    },
    {
      date: "Apr 20, 2025",
      name: "Core Workout",
      type: "Strength",
      typeColor: "purple",
      duration: "20 min",
      performance: 0,
      performanceImproved: false,
    },
    {
      date: "Apr 19, 2025",
      name: "5K Run",
      type: "Cardio",
      typeColor: "blue",
      duration: "25 min",
      performance: 7,
      performanceImproved: true,
    },
    {
      date: "Apr 18, 2025",
      name: "Leg Day",
      type: "Strength",
      typeColor: "purple",
      duration: "50 min",
      performance: 6,
      performanceImproved: false,
    },
    {
      date: "Apr 17, 2025",
      name: "Morning Meditation",
      type: "Yoga",
      typeColor: "green",
      duration: "15 min",
      performance: 9,
      performanceImproved: true,
    },
  ];

  // Helper function to get color class based on type
  const getTypeColorClass = (typeColor) => {
    const colors = {
      red: "bg-red-500",
      green: "bg-green-500",
      purple: "bg-purple-500",
      blue: "bg-blue-500",
    };
    return colors[typeColor] || "bg-gray-500";
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Workout History</h2>
        <button className="text-blue-400 hover:text-blue-300 text-sm">Export</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400 border-b border-gray-700">
              <th className="pb-3 font-medium">Date</th>
              <th className="pb-3 font-medium">Workout</th>
              <th className="pb-3 font-medium">Type</th>
              <th className="pb-3 font-medium">Duration</th>
              <th className="pb-3 font-medium">Performance</th>
              <th className="pb-3 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {workoutData.slice(0, displayCount).map((workout, index) => (
              <tr key={index} className="border-b border-gray-700 hover:bg-gray-750">
                <td className="py-4">{workout.date}</td>
                <td className="py-4 font-medium">{workout.name}</td>
                <td className="py-4">
                  <span className={`${getTypeColorClass(workout.typeColor)} text-xs px-2 py-1 rounded-full`}>
                    {workout.type}
                  </span>
                </td>
                <td className="py-4">{workout.duration}</td>
                <td className="py-4">
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-700 rounded-full h-2 mr-2">
                      <div
                        className={`h-2 rounded-full ${
                          workout.performance > 7 ? "bg-green-500" : workout.performance > 4 ? "bg-yellow-500" : "bg-red-500"
                        }`}
                        style={{ width: `${workout.performance * 10}%` }}
                      ></div>
                    </div>
                    <span className="text-sm">{workout.performance}/10</span>
                    {workout.performanceImproved && (
                      <span className="ml-2 text-green-500">
                        <i className="fas fa-arrow-up text-xs"></i>
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-4 text-right">
                  <button className="text-gray-400 hover:text-white">
                    <i className="fas fa-ellipsis-v"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {displayCount < workoutData.length && (
        <div className="text-center mt-6">
          <button 
            onClick={() => setDisplayCount(displayCount + 5)}
            className="text-blue-400 hover:text-blue-300 text-sm"
          >
            Load More
          </button>
        </div>
      )}
      
      {displayCount >= workoutData.length && workoutData.length > 5 && (
        <div className="text-center mt-6">
          <button 
            onClick={() => setDisplayCount(5)}
            className="text-blue-400 hover:text-blue-300 text-sm"
          >
            Show Less
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkoutHistory;