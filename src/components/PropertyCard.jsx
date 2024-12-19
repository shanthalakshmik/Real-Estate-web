import React, { useState } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

// Map container styling
const mapContainerStyle = {
  width: "100%",
  height: "200px",
};

// Your Google Maps API Key
const GOOGLE_MAPS_API_KEY = "AIzaSyCoH7FYCnAtdjm-CmOLdZf3O7Ajn0knCqk";

const PropertyCard = ({ property }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleViewDetails = () => setShowDetails(true);
  const handleBookVisit = () => setShowCalendar(true);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Property Image */}
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />

      {/* Property Details */}
      <div className="p-4">
        <h3 className="text-lg font-bold">{property.title}</h3>
        <p className="text-sm text-gray-500">{property.location}</p>
        <p className="text-blue-600 font-semibold mt-2">${property.price}</p>
        <div className="flex gap-4 mt-4">
          <button
            onClick={handleViewDetails}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            View Details
          </button>
          <button
            onClick={handleBookVisit}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Book Your Visit
          </button>
        </div>
      </div>

      {/* Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <h2 className="text-lg font-bold mb-4">{property.title}</h2>
            <img
              src={property.image}
              alt={property.title}
              className="w-full mb-4"
            />
            <p className="text-sm text-gray-500 mb-4">{property.location}</p>

            {/* Google Maps Integration */}
            <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={property.coordinates} // Center the map to property location
                zoom={12} // Zoom level
              >
                <Marker position={property.coordinates} />
              </GoogleMap>
            </LoadScript>

            {/* Close Button */}
            <button
              onClick={() => setShowDetails(false)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Calendar Modal */}
      {showCalendar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-lg font-bold mb-4">Book Your Visit</h2>
            <input
              type="date"
              className="border border-gray-300 p-2 rounded w-full mb-4"
              onChange={(e) => console.log("Selected Date:", e.target.value)}
            />
            <button
              onClick={() => setShowCalendar(false)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyCard;
