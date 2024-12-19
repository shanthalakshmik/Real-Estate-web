import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PropertyView = () => {
  const { id } = useParams(); // Get the property ID from the URL
  const [property, setProperty] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch property details
    const fetchProperty = async () => {
      try {
        const response = await fetch(`http://localhost:3000/properties/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProperty(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={property.image || "/images/placeholder.jpg"}
        alt={property.name}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-2xl font-bold mt-4">{property.name}</h1>
      <p className="text-gray-600">Location: {property.location}</p>
      <p className="text-gray-600">Price: ${property.price}</p>
      <p className="mt-4">{property.description}</p>
      <div className="mt-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Schedule Visit
        </button>
      </div>
    </div>
  );
};

export default PropertyView;
