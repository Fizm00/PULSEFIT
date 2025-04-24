import React from "react";

const SelectedDayWorkouts = ({ selectedDate, scheduledWorkouts, setShowAddWorkoutModal }) => {
  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes} ${ampm}`;
  };

  const getWorkoutsForSelectedDate = () => {
    return scheduledWorkouts.filter(workout => {
      const workoutDate = new Date(workout.date);
      return workoutDate.getDate() === selectedDate.getDate() && 
             workoutDate.getMonth() === selectedDate.getMonth() && 
             workoutDate.getFullYear() === selectedDate.getFullYear();
    }).sort((a, b) => {
      return a.time.localeCompare(b.time);
    });
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">
          {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
        </h2>
        <button 
          onClick={() => setShowAddWorkoutModal(true)}
          className="bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg text-sm font-medium flex items-center space-x-2"
        >
          <i className="fas fa-plus"></i>
          <span>Add Workout</span>
        </button>
      </div>

      {getWorkoutsForSelectedDate().length > 0 ? (
        <div className="space-y-4">
          {getWorkoutsForSelectedDate().map(workout => (
            <div 
              key={workout.id} 
              className="bg-gray-900 rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-800 transition-colors duration-200"
            >
              <div className="flex items-start md:items-center mb-4 md:mb-0">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                  workout.type === 'HIIT' ? 'bg-red-500/20 text-red-400' :
                  workout.type === 'Yoga' ? 'bg-green-500/20 text-green-400' :
                  workout.type === 'Strength' ? 'bg-purple-500/20 text-purple-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  <i className={`fas ${
                    workout.type === 'HIIT' ? 'fa-bolt' :
                    workout.type === 'Yoga' ? 'fa-spa' :
                    workout.type === 'Strength' ? 'fa-dumbbell' :
                    workout.type === 'Cardio' ? 'fa-heart-pulse' :
                    'fa-person-running'
                  }`}></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{workout.name}</h3>
                  <div className="flex flex-wrap items-center text-sm text-gray-400">
                    <span className="mr-3"><i className="fas fa-clock mr-1"></i> {formatTime(workout.time)}</span>
                    <span className="mr-3"><i className="fas fa-hourglass-half mr-1"></i> {workout.duration}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      workout.type === 'HIIT' ? 'bg-red-500/20 text-red-400' :
                      workout.type === 'Yoga' ? 'bg-green-500/20 text-green-400' :
                      workout.type === 'Strength' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {workout.type}
                    </span>
                  </div>
                  {workout.notes && (
                    <p className="text-sm text-gray-400 mt-2">{workout.notes}</p>
                  )}
                </div>
              </div>
              <div className="flex space-x-2">
                <a
                  href="#"
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-blue-400"
                >
                  <i className="fas fa-play"></i>
                </a>
                <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-400">
                  <i className="fas fa-pen"></i>
                </button>
                <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-400">
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-700 flex items-center justify-center">
            <i className="fas fa-calendar-day text-2xl text-gray-500"></i>
          </div>
          <h3 className="text-xl font-medium mb-2">No workouts scheduled</h3>
          <p className="text-gray-400 mb-4">Plan your fitness routine for this day</p>
          <button 
            onClick={() => setShowAddWorkoutModal(true)}
            className="bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded-lg font-medium"
          >
            Schedule a Workout
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectedDayWorkouts;