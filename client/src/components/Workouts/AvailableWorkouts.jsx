// src/components/Workouts/AvailableWorkouts.jsx
import React from "react";

const AvailableWorkouts = () => {
  const availableWorkouts = [
    {
      id: 1,
      title: "Full Body HIIT",
      description:
        "High-intensity interval training targeting all major muscle groups",
      duration: "30 min",
      difficulty: "Intermediate",
      calories: 350,
      equipment: ["None"],
      type: "HIIT",
      imagePrompt:
        "Person performing dynamic full body HIIT exercises in futuristic gym with neon blue lighting, high-tech fitness equipment visible, dark background with electric blue accents, cyberpunk fitness atmosphere, dramatic lighting effects showing intensity of workout",
    },
    {
      id: 2,
      title: "Upper Body Strength",
      description:
        "Build strength and definition in your arms, shoulders, chest and back",
      duration: "45 min",
      difficulty: "Intermediate",
      calories: 280,
      equipment: ["Dumbbells", "Resistance Bands"],
      type: "Strength",
      imagePrompt:
        "Person doing upper body strength training with smart dumbbells in futuristic gym, purple neon lighting, high-tech fitness equipment, dark background with glowing accents, cyberpunk fitness atmosphere, holographic displays showing muscle activation",
    },
    {
      id: 3,
      title: "Zen Flow Yoga",
      description:
        "Gentle flow combining breath with movement for stress relief",
      duration: "60 min",
      difficulty: "Beginner",
      calories: 200,
      equipment: ["Yoga Mat"],
      type: "Yoga",
      imagePrompt:
        "Person in flowing yoga pose on smart yoga mat in futuristic zen studio, subtle blue lighting, holographic instructor visible, dark minimalist environment with gentle glowing accents, high-tech yet peaceful atmosphere, cyberpunk meets mindfulness aesthetic",
    },
    {
      id: 4,
      title: "Cardio Kickboxing",
      description:
        "High-energy kickboxing workout to boost cardio endurance",
      duration: "40 min",
      difficulty: "Advanced",
      calories: 450,
      equipment: ["None"],
      type: "Cardio",
      imagePrompt:
        "Person performing dynamic kickboxing moves in futuristic training space, neon red and blue lighting, high-tech fitness tracking displays visible, dark background with electric accents, cyberpunk martial arts atmosphere, dramatic lighting effects showing intensity",
    },
    {
      id: 5,
      title: "Core Crusher",
      description:
        "Intense core workout targeting abs, obliques and lower back",
      duration: "25 min",
      difficulty: "Intermediate",
      calories: 220,
      equipment: ["Mat", "Resistance Bands"],
      type: "Strength",
      imagePrompt:
        "Person doing advanced core exercises on smart fitness mat, futuristic gym with blue neon lighting, holographic workout guides visible, dark atmosphere with glowing accents, cyberpunk fitness aesthetic with dramatic shadows highlighting abdominal definition",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Available Workouts</h2>
        <div className="flex items-center space-x-2">
          <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
            <i className="fas fa-sliders"></i>
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
            <i className="fas fa-arrow-down-wide-short"></i>
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {availableWorkouts.map((workout) => (
          <div
            key={workout.id}
            className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 h-48 md:h-auto overflow-hidden">
                <img
                  src={`https://readdy.ai/api/search-image?query=${encodeURIComponent(
                    workout.imagePrompt
                  )}&width=300&height=300&seq=available${workout.id}&orientation=squarish`}
                  alt={workout.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6 md:w-3/4 flex flex-col">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="font-bold text-xl mb-1">{workout.title}</h3>
                    <p className="text-gray-300 mb-3">{workout.description}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        workout.type === "HIIT"
                          ? "bg-red-500/20 text-red-400"
                          : workout.type === "Strength"
                          ? "bg-purple-500/20 text-purple-400"
                          : workout.type === "Yoga"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {workout.type}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center">
                    <i className="fas fa-clock text-blue-400 mr-2"></i>
                    <span>{workout.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-signal text-purple-400 mr-2"></i>
                    <span>{workout.difficulty}</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-fire-flame-curved text-orange-400 mr-2"></i>
                    <span>{workout.calories} cal</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-sm text-gray-400 mr-2">Equipment:</span>
                  {workout.equipment.map((item, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-xs py-1 px-2 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex justify-end">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-2 px-6 rounded-lg text-center font-medium cursor-pointer">
                    Start Workout
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button className="bg-gray-800 hover:bg-gray-700 py-3 px-6 rounded-lg text-center font-medium cursor-pointer">
          Load More
        </button>
      </div>
    </div>
  );
};

export default AvailableWorkouts;