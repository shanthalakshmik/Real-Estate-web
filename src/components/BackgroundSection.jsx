import React, { useState } from "react";

const BackgroundSection = () => {
  // State to manage the selected filter
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Handler for filter buttons
  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    console.log(`Selected Filter: ${filter}`);
    // Add your filtering logic here
  };

  return (
    <div
      className="relative h-[500px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/homepage.jpg')", // Update with your background image path
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content on top of the background */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl font-bold">Welcome to Dream Homes</h1>
        <p className="mt-4 text-lg">
          Find your perfect property with us. Discover beautiful homes today!
        </p>

        {/* Buttons for All, For Rent, For Sale */}
        <div className="mt-6 flex space-x-4">
          <button
            className={`py-2 px-6 rounded-full ${
              selectedFilter === "All"
                ? "bg-blue-500"
                : "bg-white text-blue-500 hover:bg-gray-200"
            }`}
            onClick={() => handleFilterClick("All")}
          >
            All
          </button>
          <button
            className={`py-2 px-6 rounded-full ${
              selectedFilter === "For Rent"
                ? "bg-blue-500"
                : "bg-white text-blue-500 hover:bg-gray-200"
            }`}
            onClick={() => handleFilterClick("For Rent")}
          >
            For Rent
          </button>
          <button
            className={`py-2 px-6 rounded-full ${
              selectedFilter === "For Sale"
                ? "bg-blue-500"
                : "bg-white text-blue-500 hover:bg-gray-200"
            }`}
            onClick={() => handleFilterClick("For Sale")}
          >
            For Sale
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSection;
