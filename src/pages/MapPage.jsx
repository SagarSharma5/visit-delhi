import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">Interactive Map</h1>
        <MapContainer center={[28.6139, 77.209]} zoom={13} className="h-96">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[28.6139, 77.209]}>
            <Popup>India Gate</Popup>
          </Marker>
          {/* Add more markers and popups here */}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapPage;
