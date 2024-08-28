import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import './mapa.css';
import iconUrl from '../../images/icons/round-pushpin.svg';

const MapComponent = ({ onLocationSelect }) => {
  const [position, setPosition] = useState(null);
  const [address, setAddress] = useState('');

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleAddressSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`);
      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        setPosition({ lat: parseFloat(lat), lng: parseFloat(lon) });
        onLocationSelect({ lat: parseFloat(lat), lng: parseFloat(lon) });
      } else {
        alert('Dirección no encontrada');
      }
    } catch (error) {
      console.error('Error al obtener coordenadas:', error);
      alert('Error al obtener coordenadas');
    }
  };

  const LocationMarker = () => {
    const map = useMap();
    if (position) {
      map.setView(position, 13);
    }

    useMapEvents({
      click(e) {
        setPosition(e.latlng);
        onLocationSelect(e.latlng);
      },
    });

    return position === null ? null : (
      <Marker position={position} icon={L.icon({
        iconUrl: iconUrl,
        iconSize: [38, 95],
        iconAnchor: [20, 65],
        popupAnchor: [-3, -76]
      })}>
        <Popup>
          Lat: {position.lat}, Lng: {position.lng}
        </Popup>
      </Marker>
    );
  };

  return (
    <div>
      <form onSubmit={handleAddressSubmit}>
        <input
          type="text"
          value={address}
          onChange={handleAddressChange}
          placeholder="Introduce una dirección"
        />
        <button type="submit">Buscar</button>
      </form>
      <MapContainer className="mapa1" center={[40.030502, -3.604053]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default MapComponent;