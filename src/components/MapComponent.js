import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// GeoJSON data
import tamilNaduData from './tamilNaduGeoJSON.json';
import keralaData from './keralaGeoJSON.json';
import karnatakaData from './karnatakaGeoJSON.json';

const geoJSONData = {
  "Tamil Nadu": tamilNaduData,
  "Kerala": keralaData,
  "Karnataka": karnatakaData
};

const MapComponent = ({ region }) => {
  const data = geoJSONData[region];

  const getColor = (cultivation) => {
    switch (cultivation) {
      case 'High':
        return 'red';
      case 'Moderate':
        return 'orange';
      case 'Low':
        return 'yellow';
      default:
        return 'blue';
    }
  };

  const style = (feature) => {
    return {
      fillColor: getColor(feature.properties.cultivation),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  };

  return (
    <MapContainer
      center={[11.0, 77.5]}
      zoom={7}
      scrollWheelZoom={false}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON data={data} style={style} />
    </MapContainer>
  );
};

export default MapComponent;
