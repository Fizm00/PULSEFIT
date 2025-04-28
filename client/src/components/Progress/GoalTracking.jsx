import React, { useState } from "react";

const GoalTracking = () => {
  const [showAddGoalModal, setShowAddGoalModal] = useState(false);
  
  const goals = [
    {
      id: 1,
      title: "Lose 10 pounds",
      category: "Weight",
      progress: 60,
      deadline: "May 30, 2025",
      status: "In Progress"
    },
    {
      id: 2,
      title: "Run 5K under 25 minutes",
      category: "Performance",
      progress: 80,
      deadline: "May 15, 2025",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Complete 20 workouts this month",
      category: "Consistency",
      progress: 75,
      deadline: "Apr 30, 2025",
      status: "In Progress"
    },
    {
      id: 4,
      title: "Bench press 200 lbs",
      category: "Strength",
      progress: 90,
      deadline: "Jun 1, 2025",
      status: "In Progress"
    },
    {
      id: 5,
      title: "30 days meditation streak",
      category: "Habit",
      progress: 100,
      deadline: "Apr 15, 2025",
      status: "Completed"
    }
  ];

  // Helper function to get progress color
  const getProgressColor = (progress) => {
    if (progress >= 75) return "bg-green-500";
    if (progress >= 50) return "bg-yellow-500";
    return "bg-blue-500";
  };

  // Helper function to get status color
  const getStatusColor = (status) => {
    const colors = {
      "Completed": "text-green-500",
      "In Progress": "text-blue-500",
      "At Risk": "text-yellow-500",
      "Failed": "text-red-500"
    };
    return colors[status] || "text-gray-400";
  };

  // Helper function to get category badge color
  const getCategoryColor = (category) => {
    const colors = {
      "Weight": "bg-purple-500",
      "Performance": "bg-blue-500",
      "Consistency": "bg-green-500",
      "Strength": "bg-red-500",
      "Habit": "bg-yellow-500"
    };
    return colors[category] || "bg-gray-500";
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Goal Tracking</h2>
        <button 
          onClick={() => setShowAddGoalModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm flex items-center"
        >
          <i className="fas fa-plus mr-2"></i>
          Add Goal
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {goals.map((goal) => (
          <div key={goal.id} className="bg-gray-750 rounded-lg p-5 border border-gray-700">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-lg">{goal.title}</h3>
              <span className={`${getCategoryColor(goal.category)} text-xs px-2 py-1 rounded-full`}>
                {goal.category}
              </span>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-400 mb-1">
                <span>Progress</span>
                <span>{goal.progress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`${getProgressColor(goal.progress)} h-2 rounded-full`}
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <div className="text-gray-400">
                <i className="far fa-calendar mr-1"></i>
                {goal.deadline}
              </div>
              <div className={`font-medium ${getStatusColor(goal.status)}`}>
                {goal.status}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Goal Modal */}
      {showAddGoalModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Add New Goal</h3>
              <button 
                onClick={() => setShowAddGoalModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <form>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Goal Title</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Enter your goal"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Category</label>
                <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500">
                  <option value="">Select category</option>
                  <option value="Weight">Weight</option>
                  <option value="Performance">Performance</option>
                  <option value="Consistency">Consistency</option>
                  <option value="Strength">Strength</option>
                  <option value="Habit">Habit</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Deadline</label>
                <input 
                  type="date" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button 
                  type="button"
                  onClick={() => setShowAddGoalModal(false)}
                  className="px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
                >
                  Create Goal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoalTracking;