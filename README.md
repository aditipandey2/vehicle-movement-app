# Vehicle Movement on a Map

This project is a web application that displays a vehicle moving along a predefined route on a map. The vehicle's movement is animated smoothly along the path, with controls to start, stop, and restart the movement. The project utilizes the Leaflet mapping library and custom React hooks to manage the vehicle's movement.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)

## Features

- Display a vehicle icon on a map.
- Smooth, real-time movement of the vehicle along a predefined route.
- Start, stop, and restart controls for vehicle movement.
- Route visualization on the map.
- Stylish and responsive user interface.

## Technologies Used

- **React** - JavaScript library for building user interfaces.
- **Leaflet** - Open-source JavaScript library for interactive maps.
- **JavaScript** - Core programming language used.
- **CSS** - Styling for the application.

## Installation

To get a local copy of this project up and running, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/aditipandey2/vehicle-movement-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd vehicle-movement-app
    ```
3. Install dependencies:
    ```bash
    npm install react react-dom
    npm install leaflet react-leaflet
    npm install @mapbox/polyline
    ```
4. Start the development server:
    ```bash
    npm start
    ```

## Usage

Once the server is running, open your browser and navigate to `http://localhost:3000`. The map should load, displaying the vehicle's route. Use the control buttons to start, stop, and restart the vehicle's movement.

## Customization

### Updating the Route

To change the route the vehicle follows, update the `encodedPolyline` string in `src/App.js` with a new polyline string using tools like:

- [Google Maps Polyline Utility](https://developers.google.com/maps/documentation/utilities/polylineutility)

### Adjusting Speed

To adjust the speed of the vehicle, modify the `speed` parameter in the `useVehicleMovement` hook call in `src/App.js`.


