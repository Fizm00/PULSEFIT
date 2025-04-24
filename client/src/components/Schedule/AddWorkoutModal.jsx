import React, { useState } from "react";

const AddWorkoutModal = ({ setShowAddWorkoutModal, selectedDate, availableWorkouts }) => {
  const [selectedWorkout, setSelectedWorkout] = useState("");
  const [workoutTime, setWorkoutTime] = useState("08:00");
  const [workoutNotes, setWorkoutNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Biasanya workout ditambahin ke state atau database.
    // tutup modal dulu, nanti dibuat kalo dah be.
    setShowAddWorkoutModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Add Workout</h2>
          <button 
            onClick={() => setShowAddWorkoutModal(false)}
            className="text-gray-400 hover:text-gray-200"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Date</label>
            <div className="bg-gray-700 p-3 rounded-lg">
              {selectedDate.toLocaleDateString('en-US', { 
                weekday: 'long', 
                month: 'long', 
                day: 'numeric',
                year: 'numeric'
              })}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Workout</label>
            <select
              value={selectedWorkout}
              onChange={(e) => setSelectedWorkout(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white"
              required
            >
              <option value="">Select a workout</option>
              {availableWorkouts.map(workout => (
                <option key={workout.id} value={workout.id}>
                  {workout.name} ({workout.duration}, {workout.type})
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Time</label>
            <input
              type="time"
              value={workoutTime}
              onChange={(e) => setWorkoutTime(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-400 mb-2">Notes (optional)</label>
            <textarea
              value={workoutNotes}
              onChange={(e) => setWorkoutNotes(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white h-24 resize-none"
              placeholder="Add any notes about this workout session..."
            ></textarea>
          </div>

          <div className="flex space-x-3">
            <button
              type="button"
              onClick={() => setShowAddWorkoutModal(false)}
              className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium"
            >
              Schedule Workout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWorkoutModal;
