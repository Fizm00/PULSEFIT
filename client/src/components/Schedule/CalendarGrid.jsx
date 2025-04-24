import React from "react";

const CalendarGrid = ({ viewMode, selectedDate, setSelectedDate, scheduledWorkouts, setShowWorkoutDetails }) => {
  // Calendar data generation
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    
    const days = [];
    
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({ day: 0, date: null });
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(year, month, i);
      const hasWorkout = scheduledWorkouts.some(workout => {
        const workoutDate = new Date(workout.date);
        return workoutDate.getDate() === i && 
               workoutDate.getMonth() === month && 
               workoutDate.getFullYear() === year;
      });
      
      const workoutsCount = scheduledWorkouts.filter(workout => {
        const workoutDate = new Date(workout.date);
        return workoutDate.getDate() === i && 
               workoutDate.getMonth() === month && 
               workoutDate.getFullYear() === year;
      }).length;
      
      days.push({ 
        day: i, 
        date: currentDate,
        hasWorkout,
        workoutsCount
      });
    }
    
    return days;
  };

  const generateWeekDays = () => {
    const currentDate = new Date(selectedDate);
    const currentDay = currentDate.getDay();
    const days = [];
    
    const firstDayOfWeek = new Date(currentDate);
    firstDayOfWeek.setDate(currentDate.getDate() - currentDay);
    
    for (let i = 0; i < 7; i++) {
      const day = new Date(firstDayOfWeek);
      day.setDate(firstDayOfWeek.getDate() + i);
      
      const hasWorkout = scheduledWorkouts.some(workout => {
        const workoutDate = new Date(workout.date);
        return workoutDate.getDate() === day.getDate() && 
               workoutDate.getMonth() === day.getMonth() && 
               workoutDate.getFullYear() === day.getFullYear();
      });
      
      const workoutsCount = scheduledWorkouts.filter(workout => {
        const workoutDate = new Date(workout.date);
        return workoutDate.getDate() === day.getDate() && 
               workoutDate.getMonth() === day.getMonth() && 
               workoutDate.getFullYear() === day.getFullYear();
      }).length;
      
      days.push({
        day: day.getDate(),
        date: day,
        hasWorkout,
        workoutsCount
      });
    }
    
    return days;
  };

  const getDayName = (date) => {
    return date.toLocaleString('default', { weekday: 'short' });
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes} ${ampm}`;
  };

  return (
    <div className="mb-8">
      {viewMode === 'monthly' ? (
        <div>
          <div className="grid grid-cols-7 mb-2 text-center font-medium text-gray-400">
            <div className="py-2">Sun</div>
            <div className="py-2">Mon</div>
            <div className="py-2">Tue</div>
            <div className="py-2">Wed</div>
            <div className="py-2">Thu</div>
            <div className="py-2">Fri</div>
            <div className="py-2">Sat</div>
          </div>
          
          <div className="grid grid-cols-7 gap-2">
            {generateCalendarDays().map((dayInfo, index) => (
              <div 
                key={index}
                className={`aspect-square p-2 rounded-lg ${
                  dayInfo.day === 0 
                    ? 'bg-transparent' 
                    : dayInfo.date?.toDateString() === new Date().toDateString()
                      ? 'bg-gray-700 border-2 border-blue-500'
                      : dayInfo.date?.toDateString() === selectedDate.toDateString()
                        ? 'bg-blue-600/20 border border-blue-500'
                        : 'bg-gray-800 hover:bg-gray-700 cursor-pointer'
                } flex flex-col`}
                onClick={() => dayInfo.day !== 0 && dayInfo.date && setSelectedDate(dayInfo.date)}
              >
                {dayInfo.day !== 0 && (
                  <>
                    <div className="text-right mb-1">
                      <span className={`text-sm ${
                        dayInfo.date?.toDateString() === new Date().toDateString()
                          ? 'text-blue-400 font-bold'
                          : 'text-gray-300'
                      }`}>
                        {dayInfo.day}
                      </span>
                    </div>
                    {dayInfo.hasWorkout && (
                      <div className="mt-auto flex justify-center">
                        <div className={`flex space-x-1 ${dayInfo.workoutsCount > 3 ? 'justify-center' : ''}`}>
                          {dayInfo.workoutsCount <= 3 ? (
                            Array(dayInfo.workoutsCount).fill(0).map((_, i) => (
                              <div key={i} className="w-2 h-2 rounded-full bg-blue-500"></div>
                            ))
                          ) : (
                            <span className="text-xs text-blue-400 font-medium">{dayInfo.workoutsCount} workouts</span>
                          )}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          {/* Weekly view */}
          <div className="grid grid-cols-7 gap-2">
            {generateWeekDays().map((dayInfo, index) => (
              <div key={index} className="flex flex-col">
                <div 
                  className={`text-center mb-2 p-2 rounded-lg ${
                    dayInfo.date?.toDateString() === new Date().toDateString()
                      ? 'bg-blue-600 text-white'
                      : dayInfo.date?.toDateString() === selectedDate.toDateString()
                        ? 'bg-blue-600/20 text-blue-400 border border-blue-500'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 cursor-pointer'
                  }`}
                  onClick={() => dayInfo.date && setSelectedDate(dayInfo.date)}
                >
                  <div className="text-xs font-medium">{getDayName(dayInfo.date)}</div>
                  <div className="text-lg font-bold">{dayInfo.day}</div>
                </div>
                
                <div className="flex-1 bg-gray-800 rounded-lg p-2 min-h-[200px] max-h-[200px] overflow-y-auto">
                  {scheduledWorkouts
                    .filter(workout => {
                      const workoutDate = new Date(workout.date);
                      return workoutDate.getDate() === dayInfo.date?.getDate() && 
                            workoutDate.getMonth() === dayInfo.date?.getMonth() && 
                            workoutDate.getFullYear() === dayInfo.date?.getFullYear();
                    })
                    .sort((a, b) => a.time.localeCompare(b.time))
                    .map(workout => (
                      <div 
                        key={workout.id} 
                        className={`mb-2 p-2 rounded-lg text-xs cursor-pointer ${
                          workout.type === 'HIIT' ? 'bg-red-500/20 border-l-2 border-red-500' :
                          workout.type === 'Yoga' ? 'bg-green-500/20 border-l-2 border-green-500' :
                          workout.type === 'Strength' ? 'bg-purple-500/20 border-l-2 border-purple-500' :
                          'bg-blue-500/20 border-l-2 border-blue-500'
                        }`}
                        onClick={() => setShowWorkoutDetails(workout.id)}
                      >
                        <div className="font-medium">{workout.name}</div>
                        <div className="text-gray-400">{formatTime(workout.time)} • {workout.duration}</div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarGrid;