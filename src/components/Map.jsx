import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import RecentMap from './RecentMap.jsx';
import MapClickHandler from './MapClickHandler';
import PointsOfInterest from './PointsOfInterest.jsx';


import {
    defaultIcon,
    restaurantIcon,
    coffeeIcon,
    hospitalIcon,
    parkingIcon,
    pharmacyIcon,
    bankIcon,
    policeStationIcon,
    gasStationIcon,
} from '../helpers/mapIcons';


const Map = ({ center, markers, setCenter, setMarkers, pois, setPOIs }) => {
    const getIconForType = (type) => {
        switch (type) {
            case 'restaurant':
                return restaurantIcon;
            case 'cafe':
                return coffeeIcon;
            case 'hospital':
                return hospitalIcon;
            case 'parking':
                return parkingIcon;
            case 'pharmacy':
                return pharmacyIcon;
            case 'bank':
                return bankIcon;
            case 'police':
                return policeStationIcon;
            case 'fuel':
                return gasStationIcon;
            default:
                return defaultIcon;
        };
    };

    return (
        <MapContainer center={[center.lat, center.lon]} zoom={center.zoom} style={{ height: '70vh' }}>
            <RecentMap center={center} />
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            <MapClickHandler setCenter={setCenter} setMarkers={setMarkers} />

            {markers.map((marker, idx) => (
                <Marker key={idx} position={[marker.lat, marker.lon]} icon={getIconForType(marker.type)}>
                    <Popup>{marker.name}</Popup>
                </Marker>
            ))}

            <PointsOfInterest center={center} setPOIs={setPOIs} />

            {pois.map((poi, idx) => (
                <Marker key={idx} position={[poi.lat, poi.lon]} icon={getIconForType(poi.type)}>
                    <Popup>{poi.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
