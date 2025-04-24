import React, { useState } from "react";
import CalendarHeader from "../components/Schedule/CalendarHeader";
import CalendarNavigation from "../components/Schedule/CalendarNavigation";
import CalendarGrid from "../components/Schedule/CalendarGrid";
import SelectedDayWorkouts from "../components/Schedule/SelectedDayWorkouts";
import UpcomingWorkouts from "../components/Schedule/UpcomingWorkouts";
import AddWorkoutModal from "../components/Schedule/AddWorkoutModal";
import WorkoutDetailsModal from "../components/Schedule/WorkoutDetailsModal";

const Schedule = () => {
  const [viewMode, setViewMode] = useState('weekly');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showAddWorkoutModal, setShowAddWorkoutModal] = useState(false);
  const [showWorkoutDetails, setShowWorkoutDetails] = useState(null);
  
  // Sample data
  const scheduledWorkouts = [
    {
      id: 1,
      name: "Morning HIIT",
      date: "2025-04-24",
      time: "07:30",
      duration: "30 min",
      type: "HIIT",
      notes: "Focus on cardio intervals"
    },
    {
      id: 2,
      name: "Yoga Flow",
      date: "2025-04-24",
      time: "18:00",
      duration: "45 min",
      type: "Yoga",
      notes: "Relaxation and flexibility"
    },
    {
      id: 3,
      name: "Upper Body Strength",
      date: "2025-04-25",
      time: "16:30",
      duration: "45 min",
      type: "Strength",
      notes: "Focus on chest and shoulders"
    },
    {
      id: 4,
      name: "Core Workout",
      date: "2025-04-26",
      time: "09:00",
      duration: "20 min",
      type: "Strength",
      notes: "Ab-focused routine"
    },
    {
      id: 5,
      name: "Running Session",
      date: "2025-04-28",
      time: "07:00",
      duration: "40 min",
      type: "Cardio",
      notes: "Interval training outdoors"
    },
    {
      id: 6,
      name: "Full Body Workout",
      date: "2025-04-29",
      time: "18:30",
      duration: "60 min",
      type: "Strength",
      notes: "Complete strength circuit"
    }
  ];

  const availableWorkouts = [
    { id: 1, name: "Morning HIIT", type: "HIIT", duration: "30 min" },
    { id: 2, name: "Yoga Flow", type: "Yoga", duration: "45 min" },
    { id: 3, name: "Upper Body Strength", type: "Strength", duration: "45 min" },
    { id: 4, name: "Core Workout", type: "Strength", duration: "20 min" },
    { id: 5, name: "Running Session", type: "Cardio", duration: "40 min" },
    { id: 6, name: "Full Body Workout", type: "Strength", duration: "60 min" },
    { id: 7, name: "Pilates Core", type: "Pilates", duration: "30 min" },
    { id: 8, name: "Cycling Intervals", type: "Cardio", duration: "45 min" }
  ];

  return (
    <div>
      <CalendarHeader viewMode={viewMode} setViewMode={setViewMode} />
      
      <CalendarNavigation 
        viewMode={viewMode} 
        selectedDate={selectedDate} 
        setSelectedDate={setSelectedDate} 
      />
      
      <CalendarGrid 
        viewMode={viewMode} 
        selectedDate={selectedDate} 
        setSelectedDate={setSelectedDate} 
        scheduledWorkouts={scheduledWorkouts}
        setShowWorkoutDetails={setShowWorkoutDetails}
      />
      
      <SelectedDayWorkouts 
        selectedDate={selectedDate} 
        scheduledWorkouts={scheduledWorkouts} 
        setShowAddWorkoutModal={setShowAddWorkoutModal}
        setShowWorkoutDetails={setShowWorkoutDetails}
      />
      
      <UpcomingWorkouts scheduledWorkouts={scheduledWorkouts} />
      
      {showAddWorkoutModal && (
        <AddWorkoutModal 
          setShowAddWorkoutModal={setShowAddWorkoutModal} 
          selectedDate={selectedDate}
          availableWorkouts={availableWorkouts}
        />
      )}
      
      {showWorkoutDetails !== null && (
        <WorkoutDetailsModal 
          setShowWorkoutDetails={setShowWorkoutDetails} 
          workoutId={showWorkoutDetails}
          scheduledWorkouts={scheduledWorkouts}
        />
      )}
    </div>
  );
};

export default Schedule;