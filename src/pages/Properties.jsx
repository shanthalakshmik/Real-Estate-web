import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard"; // PropertyCard is used here

const Properties = () => {
  const properties = [
    {
      id: "1",
      title: "Luxury Apartment",
      location: "New York, USA",
      price: 1200000,
      image: "/images/villas.jpg",
      coordinates: { lat: 40.7128, lng: -74.006 }, // Example New York coordinates
    },
    {
      id: "2",
      title: "Modern Villas",
      location: "California, USA",
      price: 2500000,
      image: "/images/villa-modern.jpg",
      coordinates: { lat: 34.0522, lng: -118.2437 }, // Example Los Angeles coordinates
    },
    {
      id: "3",
      title: "Beach House",
      location: "Florida, USA",
      price: 2600000,
      image: "/images/Beach house.jpg",
      coordinates: { lat: 27.994402, lng: -81.760254 }, // Example Florida coordinates
    },
    {
      id: "4",
      title: "Small House",
      location: "chennai",
      price: 2900000,
      image: "/images/home.jpg.jpg",
      coordinates: { lat: 27.994402, lng: -81.760254 }, // Example chennai coordinates
    },
    {
      id: "5",
      title: "Beach home",
      location: "Goa",
      price: 2700000,
      image: "/images/Beach house 1.jpg",
      coordinates: { lat: 27.994402, lng: -81.760254 }, // Example Bangalore coordinates
    },
    {
      id: "6",
      title: "Traditional house",
      location: "Kerala",
      price: 3200000,
      image: "/images/Traditional house.jpg",
      coordinates: { lat: 27.994402, lng: -81.760254 }, // Example Kerala coordinates
    },
    {
      id: "7",
      title: "Bangalow home",
      location: "kochi",
      price:3000000,
      image: "/images/bangalow.jpg",
      coordinates: { lat: 27.994402, lng: -81.760254 }, // Example Kochi coordinates
    },
    {
      id: "8",
      title: "Modern house",
      location: "kozhikode",
      price:3000000,
      image: "/images/calicut.jpg",
      coordinates: { lat: 27.994402, lng: -81.760254 }, // Example kozhikode coordinates
    },
    {
      id: "9",
      title: "Simple Small House",
      location: "kerala",
      price:3000000,
      image: "/images/Simple small house.jpg",
      coordinates: { lat: 27.994402, lng: -81.760254 }, // Example kerala coordinates
    },
  ];

  return (
    <div>
      <Navbar />
      <main className="container mx-auto my-8">
        <h1 className="text-3xl font-bold mb-6">Available Properties</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Properties;
