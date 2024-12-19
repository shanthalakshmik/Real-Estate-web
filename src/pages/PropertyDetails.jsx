import React, { useEffect, useState } from "react";

const PropertyDetails = ({ propertyId }) => {
  const [property, setProperty] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/properties/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error
        }
        return response.json();
      })
      .then((data) => {
        setProperty(data); // Save the fetched data to state
      })
      .catch((error) => {
        console.error("Error fetching property:", error);
        setError(error.message);
      });
  }, [propertyId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{property.name}</h1>
      <p>Location: {property.location}</p>
      <p>Price: ${property.price}</p>
      <p>Description: {property.description}</p>
      {/* Add other property details here */}

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src="./images/public/Beach house.jpg" alt={property.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{property.name}</h3>
        <p className="text-gray-600">${property.price}</p>
        <p className="text-sm text-gray-500">{property.description}</p>
        <div className="flex gap-4 mt-4">
          <button
            onClick={handleDetailsClick}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            View Details
          </button>
          <button
            onClick={handleBookVisitClick}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Book Your Visit
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <h2 className="text-lg font-bold">{property.name}</h2>
            <img src={property.image} alt={property.name} className="w-full my-4" />
            <div id={`map-${property._id}`} className="h-48 mb-4"></div>
            <button
              onClick={() => setShowModal(false)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showCalendar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-lg font-bold">Book Your Visit</h2>
            <input
              type="date"
              className="border p-2 rounded w-full my-4"
              onChange={(e) => console.log('Selected Date:', e.target.value)}
            />
            <button
              onClick={() => setShowCalendar(false)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default PropertyDetails;
