import React from "react";

const FeaturedWorkouts = () => {
  // Featured workouts data
  const featuredWorkouts = [
    {
      id: 1,
      title: "HIIT Cardio Blast",
      duration: "30 min",
      level: "Intermediate",
      imagePrompt:
        "Futuristic gym with neon blue lighting, high-tech fitness equipment",
    },
    {
      id: 2,
      title: "Core Strength Builder",
      duration: "45 min",
      level: "Advanced",
      imagePrompt:
        "Futuristic gym environment with purple neon lighting, person performing advanced core exercises",
    },
    {
      id: 3,
      title: "Yoga Flow",
      duration: "60 min",
      level: "All Levels",
      imagePrompt:
        "Zen-futuristic yoga studio with subtle blue lighting",
    },
    {
      id: 4,
      title: "Upper Body Power",
      duration: "40 min",
      level: "Intermediate",
      imagePrompt:
        "High-tech gym with futuristic strength equipment",
    },
  ];

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Featured Workouts</h2>
        <button className="text-blue-400 hover:text-blue-300 flex items-center space-x-1 cursor-pointer whitespace-nowrap !rounded-button">
          <span>View All</span>
          <i className="fas fa-arrow-right text-sm"></i>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredWorkouts.map((workout) => (
          <div
            key={workout.id}
            className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={`/api/placeholder/400/300`}
                alt={workout.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">
                {workout.title}
              </h3>
              <div className="flex justify-between text-sm text-gray-400 mb-4">
                <span>
                  <i className="fas fa-clock mr-1"></i> {workout.duration}
                </span>
                <span>
                  <i className="fas fa-signal mr-1"></i> {workout.level}
                </span>
              </div>
              <button className="w-full bg-gray-700 hover:bg-gray-600 py-2 rounded-lg text-center font-medium cursor-pointer whitespace-nowrap !rounded-button">
                Start Workout
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedWorkouts;