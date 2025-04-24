import React, { useState } from "react";
import SearchAndFilterBar from "../components/Workouts/SearchAndFilterBar";
import RecentlyCompleted from "../components/Workouts/RecentlyCompleted";
import RecommendedWorkouts from "../components/Workouts/RecommendedWorkouts";
import WorkoutCategories from "../components/Workouts/WorkoutCategories";
import AvailableWorkouts from "../components/Workouts/AvailableWorkouts";

const Workouts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    duration: [],
    difficulty: [],
  });

  const toggleFilter = (category, value) => {
    setSelectedFilters((prev) => {
      const currentFilters = [...prev[category]];
      if (currentFilters.includes(value)) {
        return {
          ...prev,
          [category]: currentFilters.filter((item) => item !== value),
        };
      } else {
        return {
          ...prev,
          [category]: [...currentFilters, value],
        };
      }
    });
  };

  return (
    <div>
      <SearchAndFilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedFilters={selectedFilters}
        toggleFilter={toggleFilter}
      />
      <RecentlyCompleted />
      <RecommendedWorkouts />
      <WorkoutCategories />
      <AvailableWorkouts />
    </div>
  );
};

export default Workouts;