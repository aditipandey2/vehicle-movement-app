import { useState, useEffect, useCallback } from 'react';

const useVehicleMovement = (route, isMoving, speed) => {
    const [vehiclePosition, setVehiclePosition] = useState(route[0]);
    const [index, setIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    const interpolate = (start, end, factor) => {
        return [
            start[0] + (end[0] - start[0]) * factor,
            start[1] + (end[1] - start[1]) * factor
        ];
    };

    const moveVehicle = useCallback(() => {
        if (isMoving && index < route.length - 1) {
            const nextIndex = index + 1;
            const start = route[index];
            const end = route[nextIndex];
            const newProgress = progress + 0.01;

            if (newProgress >= 1) {
                setIndex(nextIndex);
                setProgress(0);
            } else {
                const newPosition = interpolate(start, end, newProgress);
                setVehiclePosition(newPosition);
                setProgress(newProgress);
            }
        }
    }, [isMoving, index, progress, route]);

    useEffect(() => {
        if (isMoving) {
            const interval = setInterval(moveVehicle, speed);
            return () => clearInterval(interval);
        }
    }, [isMoving, moveVehicle, speed]);

    const restartMovement = () => {
        setIndex(0);
        setProgress(0);
        setVehiclePosition(route[0]);
    };

    return { vehiclePosition, restartMovement };
};

export default useVehicleMovement;
