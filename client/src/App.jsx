// src/App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import MobileNavigation from "./components/MobileNavigation";
import FloatingActionButton from "./components/FloatingActionButton";

const App = () => {
  const [activeTab, setActiveTab] = useState("workouts");

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="container mx-auto px-4 py-8">
        {activeTab === "dashboard" ? <Dashboard /> : <Workouts />}
      </main>

      <MobileNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <FloatingActionButton />
    </div>
  );
};

export default App;