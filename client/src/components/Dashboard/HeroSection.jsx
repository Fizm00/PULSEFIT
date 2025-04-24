function HeroSection() {
  // Weekly progress data
  const weeklyProgress = {
    workouts: 4,
    completed: 3,
    streak: 2,
    calories: 1250,
  };

  return (
    <div className="relative rounded-2xl overflow-hidden mb-10 bg-gradient-to-r from-gray-900 to-transparent">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/view-gym-room-training-sports.jpg"
          alt="Futuristic fitness environment"
          className="w-full h-full object-cover object-top opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent"></div>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center p-8 md:p-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Train Smarter,
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Achieve More
            </span>
          </h2>
          <p className="text-gray-300 text-lg mb-6 max-w-md">
            Personalized workouts, intelligent scheduling, and real-time
            progress tracking to elevate your fitness journey.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-200 cursor-pointer whitespace-nowrap !rounded-button">
              Start Workout
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-200 cursor-pointer whitespace-nowrap !rounded-button">
              View Schedule
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            {Object.entries(weeklyProgress).map(([key, value], index) => (
              <div
                key={key}
                className="bg-gray-800/80 backdrop-blur rounded-xl p-4 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <p className="text-gray-400 text-sm mb-1 capitalize">{key}</p>
                <p className="text-2xl font-bold text-white">{value}</p>
                <div className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      index % 2 === 0 ? "bg-blue-500" : "bg-purple-600"
                    }`}
                    style={{
                      width: `${Math.min(
                        100,
                        (value / (key === "calories" ? 20 : 5)) * 100
                      )}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
