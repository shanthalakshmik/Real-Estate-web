import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";
import MapComponent from "../components/MapComponent";
import ContactForm from "../components/ContactForm";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      const { data } = await API.get(`/properties/{id}`);
      setProperty(data);
    };
    fetchProperty();
  }, [id]);

  if (!property) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{property.title}</h1>
      <img src="./assets/modern home image.jpg" alt="Modern home" className="w-full h-64 object-cover mb-4" />
      <p>{property.description}</p>
      <p className="text-blue-600 font-bold">$propertyprize </p>
      <MapComponent lat={property.lat} lng={property.lng} />
      <ContactForm propertyId={property._id} />
    </div>
  );
};

export default PropertyDetails;
