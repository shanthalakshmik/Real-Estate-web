import React from "react";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => (
  <div className="border rounded-lg shadow-lg p-4">
    <img src={property.images[0]} alt={property.title} className="w-full h-48 object-cover mb-4" />
    <h2 className="text-xl font-bold">{property.title}</h2>
    <p>{property.location}</p>
    <p className="text-blue-600 font-bold">${property.price}</p>
    <p>Rooms: {property.rooms}</p>
    <Link to={`/property/${property._id}`} className="text-blue-500 underline">View Details</Link>
  </div>
);

export default PropertyCard;
