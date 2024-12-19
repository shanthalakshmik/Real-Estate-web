import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({ locations }) => {
  const containerStyle = { width: "100%", height: "400px" };
  const center = { lat: 12.9716, lng: 77.5946 }; // Default center (Bangalore)

  return (
    <LoadScript googleMapsApiKey="AIzaSyCoH7FYCnAtdjm-CmOLdZf3O7Ajn0knCqk">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {locations.map((loc, idx) => (
          <Marker key={idx} position={{ lat: loc.lat, lng: loc.lng }} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
