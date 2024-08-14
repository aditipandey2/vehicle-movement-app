import React from 'react';
import { Marker } from 'react-leaflet';
import L from 'leaflet';

const vehicleIcon = new L.Icon({
    iconUrl: require('../assets/car.png'),
    iconSize: [30, 30],
    iconAnchor: [15, 15],
});

const VehicleMarker = ({ position }) => {
    return <Marker position={position} icon={vehicleIcon} />;
};

export default VehicleMarker;
