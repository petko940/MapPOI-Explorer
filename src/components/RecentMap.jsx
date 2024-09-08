import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const RecentMap = ({ center }) => {
    const map = useMap(); // Access the map instance

    useEffect(() => {
        map.flyTo([center.lat, center.lon], center.zoom, {
            animate: true,
            duration: 2, // Duration of the animation in seconds
        });
    }, [center, map]);

    return null;
};

export default RecentMap;
