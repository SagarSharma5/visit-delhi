import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./MapPage.css";

// Custom marker icon
const customMarkerIcon = new L.Icon({
  iconUrl: "https://www.svgrepo.com/show/393319/marker.svg",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const LocationMarker = () => {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  return position ? (
    <Marker position={position} icon={customMarkerIcon}>
      <Popup>
        <div
          onClick={() =>
            window.open(
              `https://www.google.com/maps?q=${position.lat},${position.lng}`,
              "_blank"
            )
          }
          className="popup-container text-center"
        >
          <img
            src="https://w7.pngwing.com/pngs/329/734/png-transparent-google-maps-location-zion-text-logo-sign.png"
            alt="Google Maps"
            className="w-10 h-10 mx-auto mb-2"
          />
          <span>Click to view location</span>
        </div>
      </Popup>
    </Marker>
  ) : null;
};

const MapPage = () => {
  return (
    <div className="bg-black h-[85.6vh] p-4 mt-16">
      <div className="container mx-auto h-[70vh] relative">
        <h1 className="text-4xl font-bold font-heroFont mb-4 text-white">
          Interactive Map
        </h1>
        <MapContainer
          center={[28.6139, 77.209]}
          zoom={13}
          className="map-container w-full h-full"
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocationMarker />
        </MapContainer>
      </div>
    </div>
  );
};

export default MapPage;
