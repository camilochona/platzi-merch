import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import '../styles/components/Map.css';

const position = [7.11392, -73.1198]

const ChartMap = () => {
    return (
        <MapContainer center={position} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} >
                <Popup >
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>

            </Marker>
        </MapContainer>

    );
};
export default ChartMap;
