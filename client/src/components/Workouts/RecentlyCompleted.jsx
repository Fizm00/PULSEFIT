import React from "react";

const RecentlyCompleted = () => {
  const recentWorkouts = [
    {
      id: 1,
      title: "Morning HIIT",
      date: "Today",
      duration: "25 min",
      calories: 320,
      imagePrompt:
        "Person finishing high intensity interval training workout in futuristic gym with blue neon lighting, sweat glistening, high-tech fitness tracking equipment visible, dark background with electric blue accents, cyberpunk fitness atmosphere, dramatic lighting effects",
    },
    {
      id: 2,
      title: "Full Body Strength",
      date: "Yesterday",
      duration: "45 min",
      calories: 450,
      imagePrompt:
        "Person completing strength training workout with smart dumbbells in futuristic gym, neon purple lighting, high-tech fitness equipment, dark background with glowing accents, cyberpunk fitness atmosphere, holographic displays showing workout metrics",
    },
    {
      id: 3,
      title: "Yoga Flow",
      date: "2 days ago",
      duration: "60 min",
      calories: 280,
      imagePrompt:
        "Person in final yoga pose on smart yoga mat in futuristic zen studio, subtle blue lighting, holographic instructor visible, dark minimalist environment with gentle glowing accents, high-tech yet peaceful atmosphere, cyberpunk meets mindfulness aesthetic",
    },
    {
      id: 4,
      title: "Cardio Blast",
      date: "3 days ago",
      duration: "30 min",
      calories: 380,
      imagePrompt:
        "Person finishing cardio workout on futuristic treadmill, neon blue lighting, high-tech fitness tracking displays visible, dark background with electric accents, cyberpunk fitness atmosphere, dramatic lighting effects showing exhaustion but accomplishment",
    },
    {
      id: 5,
      title: "Core Focus",
      date: "4 days ago",
      duration: "20 min",
      calories: 220,
      imagePrompt:
        "Person completing core workout on smart fitness mat, futuristic gym with purple neon lighting, holographic workout guides visible, dark atmosphere with glowing accents, cyberpunk fitness aesthetic with dramatic shadows showing abdominal definition",
    },
  ];

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Recently Completed</h2>
        <button className="text-blue-400 hover:text-blue-300 flex items-center space-x-1 cursor-pointer">
          <span>View All</span>
          <i className="fas fa-arrow-right text-sm"></i>
        </button>
      </div>
      <div className="relative">
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {recentWorkouts.map((workout) => (
            <div
              key={workout.id}
              className="flex-shrink-0 w-64 bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="h-32 overflow-hidden">
                <img
                  src={`https://readdy.ai/api/search-image?query=${encodeURIComponent(
                    workout.imagePrompt
                  )}&width=400&height=200&seq=recent${workout.id}&orientation=landscape`}
                  alt={workout.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-base mb-1">{workout.title}</h3>
                <p className="text-gray-400 text-xs mb-2">{workout.date}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">
                    <i className="fas fa-clock mr-1 text-blue-400"></i>{" "}
                    {workout.duration}
                  </span>
                  <span className="text-gray-300">
                    <i className="fas fa-fire-flame-curved mr-1 text-orange-400"></i>{" "}
                    {workout.calories} cal
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div className="flex-shrink-0 w-20 flex items-center justify-center">
            <button className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center cursor-pointer">
              <i className="fas fa-arrow-right text-blue-400"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentlyCompleted;