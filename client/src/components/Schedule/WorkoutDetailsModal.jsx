import React from "react";

const WorkoutDetailsModal = ({ setShowWorkoutDetails, workoutId, scheduledWorkouts }) => {
  const workout = scheduledWorkouts.find(w => w.id === workoutId);

  if (!workout) {
    return null;
  }

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes} ${ampm}`;
  };

  const formattedDate = new Date(workout.date).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const getWorkoutTypeColor = (type) => {
    switch (type) {
      case 'HIIT':
        return 'bg-red-500/20 text-red-400';
      case 'Yoga':
        return 'bg-green-500/20 text-green-400';
      case 'Strength':
        return 'bg-purple-500/20 text-purple-400';
      case 'Cardio':
        return 'bg-blue-500/20 text-blue-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getWorkoutTypeIcon = (type) => {
    switch (type) {
      case 'HIIT':
        return 'fa-bolt';
      case 'Yoga':
        return 'fa-spa';
      case 'Strength':
        return 'fa-dumbbell';
      case 'Cardio':
        return 'fa-heart-pulse';
      default:
        return 'fa-person-running';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Workout Details</h2>
          <button 
            onClick={() => setShowWorkoutDetails(null)}
            className="text-gray-400 hover:text-gray-200"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="mb-6">
          <div className="flex items-center mb-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${getWorkoutTypeColor(workout.type)}`}>
              <i className={`fas ${getWorkoutTypeIcon(workout.type)} text-xl`}></i>
            </div>
            <div>
              <h3 className="text-2xl font-bold">{workout.name}</h3>
              <span className={`px-3 py-1 rounded-full text-sm ${getWorkoutTypeColor(workout.type)}`}>
                {workout.type}
              </span>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <div className="flex items-center mb-3">
              <i className="fas fa-calendar-day w-6 text-gray-400"></i>
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center mb-3">
              <i className="fas fa-clock w-6 text-gray-400"></i>
              <span>{formatTime(workout.time)}</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-hourglass-half w-6 text-gray-400"></i>
              <span>{workout.duration}</span>
            </div>
          </div>

          {workout.notes && (
            <div className="mb-4">
              <h4 className="text-gray-400 mb-2">Notes</h4>
              <div className="bg-gray-700 rounded-lg p-4">
                <p>{workout.notes}</p>
              </div>
            </div>
          )}
        </div>

        <div className="flex space-x-3">
          <button
            onClick={() => setShowWorkoutDetails(null)}
            className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium"
          >
            Close
          </button>
          <button
            className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium flex items-center justify-center"
          >
            <i className="fas fa-play mr-2"></i>
            Start Workout
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsModal;