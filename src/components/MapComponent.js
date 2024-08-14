import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import VehicleMarker from './VehicleMarker';
import RoutePath from './RoutePath';

const MapComponent = ({ vehiclePosition, route }) => {
    return (
        <MapContainer center={vehiclePosition} zoom={13} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <RoutePath route={route} />
            <VehicleMarker position={vehiclePosition} />
        </MapContainer>
    );
};

export default MapComponent;
