import React from "react";
import HeroSection from "../components/Dashboard/HeroSection";
import CalendarSection from "../components/Dashboard/CalendarSection";
import FeaturedWorkouts from "../components/Dashboard/FeaturedWorkouts";
import WorkoutCategories from "../components/Dashboard/WorkoutCategories";

const Dashboard = () => {
  return (
    <div>
      <HeroSection />
      <CalendarSection />
      <FeaturedWorkouts />
      <WorkoutCategories />
    </div>
  );
};

export default Dashboard;