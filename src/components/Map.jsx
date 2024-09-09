import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import RecentMap from './RecentMap.jsx';
import MapClickHandler from './MapClickHandler';

const Map = ({ center, markers, setCenter, setMarkers }) => {
    return (
        <MapContainer center={[center.lat, center.lon]} zoom={center.zoom} style={{ height: '70vh'}}>
            <RecentMap center={center} />
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <MapClickHandler setCenter={setCenter} setMarkers={setMarkers} /> {/* Handle map clicks */}
            {markers.map((marker, idx) => (
                <Marker key={idx} position={[marker.lat, marker.lon]}>
                    <Popup>{marker.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
