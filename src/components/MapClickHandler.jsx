import { useMapEvents } from 'react-leaflet';

const MapClickHandler = ({ setCenter, setMarkers }) => {
    useMapEvents({
        click: async (e) => {
            const { lat, lng } = e.latlng;
            setMarkers([{ lat, lon: lng, name: `Marker at ${lat.toFixed(4)}, ${lng.toFixed(4)}` }]);
            setCenter({ lat, lon: lng, zoom: 14 });

            try {
                const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
                const data = await response.json();

                const placeInfo = data.display_name || `(${lat.toFixed(4)}, ${lng.toFixed(4)})`;
                setMarkers([{ lat, lon: lng, name: placeInfo }]);

            } catch (error) {
                console.error(error);
            }
        },
    });
    return null;
};

export default MapClickHandler;
