import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import RecentMap from './RecentMap.jsx';
import MapClickHandler from './MapClickHandler';
import PointsOfInterest from './PointsOfInterest.jsx';

const Map = ({ center, markers, setCenter, setMarkers, pois, setPOIs }) => {
    return (
        <MapContainer center={[center.lat, center.lon]} zoom={center.zoom} style={{ height: '70vh' }}>
            <RecentMap center={center} />
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            <MapClickHandler setCenter={setCenter} setMarkers={setMarkers} />

            {markers.map((marker, idx) => (
                <Marker key={idx} position={[marker.lat, marker.lon]}>
                    <Popup>{marker.name}</Popup>
                </Marker>
            ))}

            <PointsOfInterest center={center} setPOIs={setPOIs} /> 

            {pois.map((poi, idx) => (
                <Marker key={idx} position={[poi.lat, poi.lon]}>
                    <Popup>{poi.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
