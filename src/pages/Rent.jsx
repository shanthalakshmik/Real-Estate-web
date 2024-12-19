import React from "react";

const Rent  = () => {
  return (
    <div className="bg-blue-50 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section: Text and Button */}
        <div className="md:w-1/2 text-center md:text-left px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
            We're realtors born out of a passion for customer satisfaction
          </h1>
          <button className="mt-6 bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600">
            Get Started
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 px-6">
          <img
            src="/images/images.png" 
            alt="Realtors"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>




  );
};



const LuxuryHomesSection = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto text-center px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Discover Luxury Homes
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-4 leading-relaxed">
          Luxury real estate is the real estate market niche targeted to
          high-net-worth individuals. These individuals tend to own multiple
          homes in numerous locations across the world. The characteristics
          that define luxury real estate differ among countries. However, the
          location largely defines the property’s value, especially with
          respect to whether it offers views or amenities such as proximity to
          golf courses, school districts, and the downtown district.
        </p>

        {/* Links Section */}
        <div className="flex justify-center mt-8 space-x-8">
          <a
            href="#"
            className="text-blue-500 font-semibold hover:underline"
          >
            Private Brokerage
          </a>
          <a
            href="#"
            className="text-blue-500 font-semibold hover:underline"
          >
            Business Development
          </a>
          <a
            href="#"
            className="text-blue-500 font-semibold hover:underline"
          >
            Customer Care
          </a>
        </div>
      </div>
    </div>
  );
};

export default Rent;
