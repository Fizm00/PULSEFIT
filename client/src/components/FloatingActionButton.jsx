import React from "react";

const FloatingActionButton = () => {
  return (
    <button className="fixed right-6 bottom-20 md:bottom-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/20 transition-all duration-200 cursor-pointer whitespace-nowrap !rounded-button">
      <i className="fas fa-plus text-white text-xl"></i>
    </button>
  );
};

export default FloatingActionButton;