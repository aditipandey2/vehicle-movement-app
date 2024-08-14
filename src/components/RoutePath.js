import React from 'react';
import { Polyline } from 'react-leaflet';

const RoutePath = ({ route }) => {
    return <Polyline positions={route} color="blue" />;
};

export default RoutePath;
