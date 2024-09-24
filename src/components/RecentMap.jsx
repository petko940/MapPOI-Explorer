import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const RecentMap = ({ center }) => {
    const map = useMap(); 

    useEffect(() => {
        map.flyTo([center.lat, center.lon], center.zoom, {
            animate: true,
            duration: 2, 
        });
    }, [center, map]);

    return null;
};

export default RecentMap;
