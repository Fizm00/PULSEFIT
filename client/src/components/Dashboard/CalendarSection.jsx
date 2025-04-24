import React, { useState } from "react";

const CalendarSection = () => {
  const [currentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [workoutSchedule] = useState({
    1: "rest",
    3: "cardio",
    5: "strength",
    7: "hiit",
    10: "yoga",
    12: "strength",
    15: "cardio",
    18: "rest",
    22: "strength",
    25: "hiit",
    28: "yoga",
  });

  // Generate calendar days for current month
  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  };

  const days = getDaysInMonth();

  // Get day of week (0-6) for the first day of current month
  const getFirstDayOfMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const firstDayOfMonth = getFirstDayOfMonth();

  // Handle day selection
  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };

  // Get workout type color
  const getWorkoutColor = (type) => {
    switch (type) {
      case "cardio":
        return "bg-blue-500";
      case "strength":
        return "bg-purple-600";
      case "hiit":
        return "bg-red-500";
      case "yoga":
        return "bg-green-500";
      case "rest":
        return "bg-gray-600";
      default:
        return "bg-gray-800";
    }
  };

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Your Workout Schedule</h2>
        <div className="flex space-x-2">
          <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg cursor-pointer whitespace-nowrap !rounded-button">
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="bg-gray-800 px-4 py-2 rounded-lg">
            <span>
              {currentDate.toLocaleString("default", { month: "long" })}{" "}
              {currentDate.getFullYear()}
            </span>
          </div>
          <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg cursor-pointer whitespace-nowrap !rounded-button">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div className="grid grid-cols-7 gap-2 mb-4">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center text-gray-400 font-medium">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: firstDayOfMonth }).map((_, index) => (
            <div
              key={`empty-${index}`}
              className="h-20 rounded-lg"
            ></div>
          ))}

          {days.map((day) => (
            <div
              key={day}
              onClick={() => handleDaySelect(day)}
              className={`h-20 rounded-lg border ${
                selectedDay === day
                  ? "border-blue-500"
                  : "border-gray-700"
              } hover:border-blue-500/50 transition-all duration-200 p-2 cursor-pointer relative`}
            >
              <div className="flex justify-between">
                <span
                  className={`${
                    new Date().getDate() === day &&
                    new Date().getMonth() === currentDate.getMonth()
                      ? "bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center"
                      : ""
                  }`}
                >
                  {day}
                </span>
                {workoutSchedule[day] && (
                  <span
                    className={`w-3 h-3 rounded-full ${getWorkoutColor(
                      workoutSchedule[day]
                    )}`}
                  ></span>
                )}
              </div>

              {workoutSchedule[day] && (
                <div
                  className={`absolute bottom-2 left-2 right-2 rounded-lg py-1 px-2 text-xs text-center capitalize ${getWorkoutColor(
                    workoutSchedule[day]
                  )}`}
                >
                  {workoutSchedule[day]}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarSection;