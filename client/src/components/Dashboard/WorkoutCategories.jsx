import React from "react";

const WorkoutCategories = () => {
  // Workout categories
  const workoutCategories = [
    { id: 1, name: "Strength", icon: "fa-dumbbell" },
    { id: 2, name: "Cardio", icon: "fa-heart-pulse" },
    { id: 3, name: "HIIT", icon: "fa-bolt" },
    { id: 4, name: "Yoga", icon: "fa-spa" },
    { id: 5, name: "Stretching", icon: "fa-person-walking" },
    { id: 6, name: "Recovery", icon: "fa-bed" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Workout Categories</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search categories..."
            className="bg-gray-800 border-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 pl-10 pr-4 text-sm w-64"
          />
          <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {workoutCategories.map((category) => (
          <div
            key={category.id}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 flex flex-col items-center cursor-pointer group"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center mb-4 group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300">
              <i
                className={`fas ${category.icon} text-2xl text-blue-400 group-hover:text-blue-300 transition-colors duration-300`}
              ></i>
            </div>
            <h3 className="font-medium text-center">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutCategories;