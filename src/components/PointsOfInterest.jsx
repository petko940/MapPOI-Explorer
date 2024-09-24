import { useEffect } from 'react';

const PointsOfInterest = ({ center, setPOIs, selectedType }) => {
    useEffect(() => {
        if (!center || !selectedType) return;

        const fetchPOIs = async () => {
            const { lat, lon } = center;

            try {
                const query = `
                [out:json];
                (
                    node(around:1000,${lat},${lon})[${selectedType}];
                    relation(around:1000,${lat},${lon})[${selectedType}];                   
                );
                out;`;

                const response = await fetch(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`);
                const data = await response.json();

                const pois = data.elements.map(poi => ({
                    lat: poi.lat,
                    lon: poi.lon,
                    name: poi.tags.name || poi.tags.amenity || poi.tags.tourism || poi.tags.shop || poi.tags.leisure || 'Unnamed',
                    type: poi.tags.amenity || poi.tags.tourism || poi.tags.shop || poi.tags.leisure || poi.tags.office || poi.tags.craft || 'Unknown',
                }));

                setPOIs(pois);
            } catch (error) {
                console.error('Error fetching POIs:', error);
            }
        };

        fetchPOIs();
    }, [center, selectedType, setPOIs]);

    return null;
};

export default PointsOfInterest;