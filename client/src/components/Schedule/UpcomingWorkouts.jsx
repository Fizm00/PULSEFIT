import React from "react";

const UpcomingWorkouts = ({ scheduledWorkouts }) => {
  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes} ${ampm}`;
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Upcoming Workouts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {scheduledWorkouts
          .filter(workout => {
            const workoutDate = new Date(workout.date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            return workoutDate >= today;
          })
          .sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateA.getTime() - dateB.getTime() || a.time.localeCompare(b.time);
          })
          .slice(0, 3)
          .map(workout => {
            const workoutDate = new Date(workout.date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            
            let dateDisplay;
            if (workoutDate.toDateString() === today.toDateString()) {
              dateDisplay = 'Today';
            } else if (workoutDate.toDateString() === tomorrow.toDateString()) {
              dateDisplay = 'Tomorrow';
            } else {
              dateDisplay = workoutDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
            }
            
            return (
              <div 
                key={workout.id} 
                className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold">{workout.name}</h3>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    workout.type === 'HIIT' ? 'bg-red-500/20 text-red-400' :
                    workout.type === 'Yoga' ? 'bg-green-500/20 text-green-400' :
                    workout.type === 'Strength' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {workout.type}
                  </span>
                </div>
                
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <div className="flex items-center mr-3">
                    <i className="fas fa-calendar-alt mr-1"></i>
                    <span>{dateDisplay}</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-clock mr-1"></i>
                    <span>{formatTime(workout.time)}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-400">
                  <i className="fas fa-hourglass-half mr-1"></i>
                  <span>{workout.duration}</span>
                </div>
                
                <div className="mt-4 pt-3 border-t border-gray-700 flex justify-end">
                  <button className="bg-blue-600 hover:bg-blue-700 py-1 px-3 rounded text-sm font-medium flex items-center">
                    <i className="fas fa-play mr-1"></i>
                    <span>Start</span>
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UpcomingWorkouts;