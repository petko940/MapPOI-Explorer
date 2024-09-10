import { useEffect } from 'react';

const PointsOfInterest = ({ center, setPOIs }) => {
    useEffect(() => {
        if (!center) return;

        const fetchPOIs = async () => {
            const { lat, lon } = center;

            try {
                const response = await fetch(`https://overpass-api.de/api/interpreter?data=[out:json];node(around:1000,${lat},${lon})[~"^amenity$|^shop$|^tourism$"~"."];out;`);
                const data = await response.json();

                const pois = data.elements.map(poi => ({
                    lat: poi.lat,
                    lon: poi.lon,
                    // name: poi.tags.name || poi.tags.amenity || poi.tags.shop || 'POI',
                    name: poi.tags.tourism,
                }));
                
                for (let i = 0; i < pois.length; i++) {
                    console.log(pois[i].name);
                    
                    console.log(pois[i].tourism);     
                }
                
                setPOIs(pois); 
            } catch (error) {
                console.error('Error fetching POIs:', error);
            }
        };

        fetchPOIs();
    }, [center, setPOIs]);

    return null;
};

export default PointsOfInterest;
