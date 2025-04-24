import React from "react";

const CalendarNavigation = ({ viewMode, selectedDate, setSelectedDate }) => {
  const getMonthName = (date) => {
    return date.toLocaleString('default', { month: 'long' });
  };

  const navigateToPreviousPeriod = () => {
    const newDate = new Date(selectedDate);
    if (viewMode === 'monthly') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setDate(newDate.getDate() - 7);
    }
    setSelectedDate(newDate);
  };

  const navigateToNextPeriod = () => {
    const newDate = new Date(selectedDate);
    if (viewMode === 'monthly') {
      newDate.setMonth(newDate.getMonth() + 1);
    } else {
      newDate.setDate(newDate.getDate() + 7);
    }
    setSelectedDate(newDate);
  };

  const navigateToToday = () => {
    setSelectedDate(new Date());
  };

  return (
    <div className="flex justify-between items-center mb-6 bg-gray-800 rounded-lg p-4">
      <button 
        onClick={navigateToPreviousPeriod}
        className="p-2 rounded-full hover:bg-gray-700"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      
      <div className="text-center">
        <h2 className="text-xl font-bold">
          {viewMode === 'monthly' 
            ? `${getMonthName(selectedDate)} ${selectedDate.getFullYear()}`
            : `Week of ${new Date(
                new Date(selectedDate).setDate(selectedDate.getDate() - selectedDate.getDay())
              ).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${
                new Date(
                  new Date(selectedDate).setDate(selectedDate.getDate() - selectedDate.getDay() + 6)
                ).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
              }`
          }
        </h2>
      </div>
      
      <div className="flex items-center space-x-2">
        <button 
          onClick={navigateToToday}
          className="py-1 px-3 text-sm bg-gray-700 hover:bg-gray-600 rounded-lg"
        >
          Today
        </button>
        <button 
          onClick={navigateToNextPeriod}
          className="p-2 rounded-full hover:bg-gray-700"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default CalendarNavigation;