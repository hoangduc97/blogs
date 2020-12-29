import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const containerStyle = {
    width: '550px',
    height: '300px',
    margin: 'auto'
};

const center = {
    lat: 16.061088,
    lng: 108.214309,
};

function ContactMap() {
    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    return (
        <LoadScript googleMapsApiKey="AIzaSyAX4aweIkqiXM_cNn05aDkEdn2XroDzoB0">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
}

export default React.memo(ContactMap);
