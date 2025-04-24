// src/components/Workouts/RecommendedWorkouts.jsx
import React from "react";

const RecommendedWorkouts = () => {
  const recommendedWorkouts = [
    {
      id: 1,
      title: "HIIT Cardio Blast",
      trainer: "Alex Rivera",
      duration: "30 min",
      difficulty: "Intermediate",
      imagePrompt:
        "Futuristic gym with neon blue lighting, high-tech fitness equipment, person doing high-intensity interval training, dark background with electric blue accents, sleek and modern aesthetic, fitness technology visible, holographic displays showing workout metrics, dramatic lighting, cyberpunk fitness atmosphere",
    },
    {
      id: 2,
      title: "Core Strength Builder",
      trainer: "Maya Johnson",
      duration: "45 min",
      difficulty: "Advanced",
      imagePrompt:
        "Futuristic gym environment with purple neon lighting, person performing advanced core exercises on smart fitness mat, holographic workout guides visible, high-tech fitness tracking devices, dark atmosphere with glowing accents, sleek minimalist equipment, cyberpunk fitness aesthetic with dramatic shadows",
    },
    {
      id: 3,
      title: "Yoga Flow",
      trainer: "Kai Chen",
      duration: "60 min",
      difficulty: "All Levels",
      imagePrompt:
        "Zen-futuristic yoga studio with subtle blue lighting, person in advanced yoga pose on smart yoga mat, holographic instructor guidance visible, dark minimalist environment with gentle glowing accents, high-tech yet peaceful atmosphere, cyberpunk meets mindfulness aesthetic",
    },
    {
      id: 4,
      title: "Upper Body Power",
      trainer: "Zoe Williams",
      duration: "40 min",
      difficulty: "Intermediate",
      imagePrompt:
        "High-tech gym with futuristic strength equipment, person doing upper body workout with smart dumbbells, neon blue and purple lighting, dark background with electric accents, fitness tracking displays visible, sleek metallic surfaces reflecting colored lights, cyberpunk fitness environment with dramatic shadows",
    },
  ];

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Recommended For You</h2>
        <button className="text-blue-400 hover:text-blue-300 flex items-center space-x-1 cursor-pointer">
          <span>View All</span>
          <i className="fas fa-arrow-right text-sm"></i>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendedWorkouts.map((workout) => (
          <div
            key={workout.id}
            className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src={`https://readdy.ai/api/search-image?query=${encodeURIComponent(
                  workout.imagePrompt
                )}&width=400&height=300&seq=recommended${workout.id}&orientation=landscape`}
                alt={workout.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                <span className="bg-blue-500/80 backdrop-blur-sm text-white text-xs py-1 px-2 rounded-full">
                  {workout.duration}
                </span>
                <span className="bg-gray-800/80 backdrop-blur-sm text-white text-xs py-1 px-2 rounded-full">
                  {workout.difficulty}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">{workout.title}</h3>
              <p className="text-gray-400 text-sm mb-3">by {workout.trainer}</p>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-2 rounded-lg text-center font-medium cursor-pointer">
                Start Workout
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedWorkouts;