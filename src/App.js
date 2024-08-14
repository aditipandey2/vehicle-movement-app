import React, { useState } from 'react';
import MapComponent from './components/MapComponent';
import useVehicleMovement from './hooks/useVehicleMovement';
import { decodePolyline } from './utils/polylineUtil';
import './styles/App.css';

const App = () => {
    const encodedPolyline = 'qg}mDk}uwMmluL~jcAzr~@hohBlt_l@myrC??qxBjidG`otGv|fG';
    const route = decodePolyline(encodedPolyline);

    const [isMoving, setIsMoving] = useState(false);
    const { vehiclePosition, restartMovement } = useVehicleMovement(route, isMoving, 500); 

    const handleStart = () => setIsMoving(true);
    const handleStop = () => setIsMoving(false);
    const handleRestart = () => {
        setIsMoving(true);
        restartMovement();
    };

    return (
        <div className="app">
            <h1>Vehicle Movement Map</h1>
            <div className="controls">
                <button onClick={handleStart} className="control-btn">Start</button>
                <button onClick={handleStop} className="control-btn">Stop</button>
                <button onClick={handleRestart} className="control-btn">Restart</button>
            </div>
            <MapComponent vehiclePosition={vehiclePosition} route={route} />
        </div>
    );
};

export default App;
