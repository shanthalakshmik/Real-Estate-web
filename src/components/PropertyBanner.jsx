import React from "react";

const PropertyBanner = () => {
  return (
    <div
      className="relative h-[500px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/villas.jpg')", // Update this path to your image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="absolute bottom-10 left-10 text-white p-6 bg-blue-600 rounded-md shadow-md max-w-md">
        <h1 className="text-3xl font-bold">Sabestian Villa</h1>
        <p className="text-sm mt-2">
          123 Main Gardens Lane, New York, NY, 10025
        </p>
        <div className="flex items-center gap-4 text-sm mt-4">
          <p>Bedrooms: 3</p>
          <p>Bathrooms: 2</p>
          <p>Area: 2700 Sq Ft</p>
        </div>
        <p className="text-2xl font-bold mt-4">$2,689,500</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded mt-4">
          Schedule Visit
        </button>
      </div>
    </div>
  );
};

export default PropertyBanner;
