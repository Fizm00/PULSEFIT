import React from "react";

const WorkoutCategories = () => {
  const workoutCategories = [
    {
      id: 1,
      name: "Strength",
      count: 24,
      icon: "fa-dumbbell",
      gradient: "from-purple-600 to-blue-500",
    },
    {
      id: 2,
      name: "Cardio",
      count: 18,
      icon: "fa-heart-pulse",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      id: 3,
      name: "HIIT",
      count: 15,
      icon: "fa-bolt",
      gradient: "from-red-500 to-orange-400",
    },
    {
      id: 4,
      name: "Yoga",
      count: 20,
      icon: "fa-spa",
      gradient: "from-green-500 to-emerald-400",
    },
    {
      id: 5,
      name: "Pilates",
      count: 12,
      icon: "fa-person-walking",
      gradient: "from-pink-500 to-purple-400",
    },
    {
      id: 6,
      name: "Recovery",
      count: 8,
      icon: "fa-bed",
      gradient: "from-indigo-500 to-blue-400",
    },
  ];

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Workout Categories</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {workoutCategories.map((category) => (
          <div
            key={category.id}
            className="rounded-xl overflow-hidden relative h-40 cursor-pointer group"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}
            ></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-2 group-hover:bg-white/30 transition-all duration-300">
                <i className={`fas ${category.icon} text-2xl`}></i>
              </div>
              <h3 className="font-bold text-center text-lg">{category.name}</h3>
              <p className="text-white/80 text-sm">{category.count} workouts</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutCategories;