import React, { useEffect, useState } from "react";
import API from "../api";

const Dashboard = () => {
  const [properties, setProperties] = useState([]);
  const [newProperty, setNewProperty] = useState({
    title: "modern villas",
    location: "uk",
    price: "50000000",
    rooms: "5",
    description: "sale",
    imageUrl: "pexels pixabay 53610.jpg",
  });

  // Fetch properties for the dashboard
  useEffect(() => {
    const fetchProperties = async () => {
      const { data } = await API.get("/properties");
      setProperties(data);
    };
    fetchProperties();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setNewProperty({ ...newProperty, [e.target.name]: e.target.value });
  };

  // Add a new property
  const handleAddProperty = async () => {
    const { data } = await API.post("/properties", newProperty);
    setProperties([...properties, data]);
    setNewProperty({
      title: "modern villas",
      location: "london",
      price: "60000000",
      rooms: "6",
      description: "sale",
      imageUrl: "public/assets/pexels-pixabay-53610.jpg",
    });
  };

  // Delete a property
  const handleDeleteProperty = async (id) => {
    await API.delete(`/properties/${id}`);
    setProperties(properties.filter((property) => property._id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      {/* Add New Property Form */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Add New Property</h2>
        <input type="text" name="title" placeholder="Title" className="w-full mb-2 p-2 border" value={newProperty.title} onChange={handleChange} />
        <input type="text" name="location" placeholder="Location" className="w-full mb-2 p-2 border" value={newProperty.location} onChange={handleChange} />
        <input type="number" name="price" placeholder="Price" className="w-full mb-2 p-2 border" value={newProperty.price} onChange={handleChange} />
        <input type="number" name="rooms" placeholder="Rooms" className="w-full mb-2 p-2 border" value={newProperty.rooms} onChange={handleChange} />
        <textarea name="description" placeholder="Description" className="w-full mb-2 p-2 border" rows="3" value={newProperty.description} onChange={handleChange}></textarea>
        <input type="text" name="imageUrl" placeholder="Image URL" className="w-full mb-2 p-2 border" value={newProperty.imageUrl} onChange={handleChange} />
        <button onClick={handleAddProperty} className="bg-blue-600 text-white p-2 w-full">Add Property</button>
      </div>

      {/* Property List */}
      <h2 className="text-2xl font-bold mb-4">Manage Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property._id} className="border p-4 rounded-lg">
            <h3 className="text-xl font-bold">{property.title}</h3>
            <p>Location: {property.location}</p>
            <p>Price: ${property.price}</p>
            <p>Rooms: {property.rooms}</p>
            <button onClick={() => handleDeleteProperty(property._id)} className="bg-red-600 text-white p-2 w-full mt-2">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
