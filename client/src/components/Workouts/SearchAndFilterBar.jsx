import React from "react";

const SearchAndFilterBar = ({ searchQuery, setSearchQuery, selectedFilters, toggleFilter }) => {
  const filterOptions = {
    type: ["Strength", "Cardio", "HIIT", "Yoga", "Pilates", "CrossFit"],
    duration: ["15 min", "30 min", "45 min", "60+ min"],
    difficulty: ["Beginner", "Intermediate", "Advanced"],
  };

  return (
    <div className="sticky top-[73px] z-40 bg-gray-900 py-4 border-b border-gray-800 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Bar */}
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search workouts..."
            className="w-full bg-gray-800 border-none focus:ring-2 focus:ring-blue-500 rounded-lg py-3 pl-10 pr-4 text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        </div>
        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2">
          {Object.entries(filterOptions).map(([category, options]) =>
            options.map((option) => (
              <button
                key={`${category}-${option}`}
                onClick={() => toggleFilter(category, option)}
                className={`py-1 px-3 rounded-full text-xs font-medium cursor-pointer ${
                  selectedFilters[category].includes(option)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {option}
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilterBar;