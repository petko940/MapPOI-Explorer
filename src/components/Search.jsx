import { useState } from "react";

const Search = ({ setCenter, setMarkers }) => {
    const [location, setLocation] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(location)}&format=json`
            );
            const data = await response.json();

            for (let i = 0; i < data.length; i++) {
                console.log(`${data[i].display_name} | ${data[i].type}`);
            }

            const location_type = {
                city: 12,
                town: 12,
                village: 13,
                suburb: 13,
                hamlet: 14,
                county: 10,
                state: 8,
                country: 6,
                continent: 3,
                administrative: 10,
                political: 6
            };

            const filteredData = data.filter(item => item.display_name.includes('Bulgaria'));

            const sortedData = filteredData.sort((a, b) => {
                const zoomA = location_type[a.type] || 0;
                const zoomB = location_type[b.type] || 0;

                return zoomB - zoomA;
            });

            const matchingLocation = sortedData.find(item => location_type[item.type]);

            if (matchingLocation) {
                const { lat, lon, type, boundingbox } = matchingLocation;

                let zoomLevel = location_type[type];

                if (boundingbox) {
                    const bbox = boundingbox.map(coord => parseFloat(coord));
                    const latDiff = Math.abs(bbox[1] - bbox[0]); // Difference in latitude
                    const lonDiff = Math.abs(bbox[3] - bbox[2]); // Difference in longitude
                    const maxDiff = Math.max(latDiff, lonDiff);

                    if (maxDiff < 0.05) {
                        zoomLevel += 2; 
                    } else if (maxDiff < 0.1) {
                        zoomLevel += 1; 
                    } else if (maxDiff > 2) {
                        zoomLevel -= 1;                     }
                }

                setCenter({ lat: parseFloat(lat), lon: parseFloat(lon), zoom: zoomLevel });
                setMarkers([{ lat: parseFloat(lat), lon: parseFloat(lon), name: location }]);
            } else {
                alert('Location not found in Bulgaria');
            }
        } catch (error) {
            console.error('Error fetching location data:', error);
        }
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter a location"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default Search;
