import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch properties from API
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await API.get("/properties");
        setProperties(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to load properties.");
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading properties...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Property Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div
            key={property._id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src="./assets/pexels pixabay 53610.jpg"
              alt="pexels pixabay 53610.jpg"
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{modern.villas}</h3>
              <p className="text-sm text-gray-600">{uk}</p>
              <p className="text-lg font-bold mt-2">${50000000}</p>
              <Link
                to={`/property/${property._id}`}
                className="inline-block mt-4 text-blue-500 hover:underline"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
