'use client'
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic"; // or import dynamic from "next/dynamic"; for Next.js

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), {
  ssr: false, // This line ensures that the component is not rendered on the server
});

const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), {
  ssr: false, // This line ensures that the component is not rendered on the server
});

const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), {
  ssr: false, // This line ensures that the component is not rendered on the server
});

const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false, // This line ensures that the component is not rendered on the server
});

import "leaflet/dist/leaflet.css";
import axios from "axios";

const Map = () => {
  const [crimeArray, setCrimeArray] = useState([]);

  useEffect(() => {
    axios({
      url: "https://virtual-police.vercel.app/api/getallData",
      method: "GET",
    })
      .then((res) => {
        setCrimeArray(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  // Static coordinates for initial center
  const center = [23.243363, 79.636530];
  const zoom = 5;

  return (
    <div>
      <MapContainer
        center={center}
        className="map self-center w-screen h-[92vh] rounded-md border-5 border-black"
        zoom={zoom}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {crimeArray.map((crime, index) => (
          <Marker key={index} position={[crime.latitude, crime.longitude]}>
            <Popup className="text-black flex flex-col font-medium">
              <p>Crime type: {crime.crime}</p>
              <p>Date time: {crime.date}</p>
              <p>Name: {crime.name}</p>
              <p>Mobile Number: {crime.mobileNumber}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
