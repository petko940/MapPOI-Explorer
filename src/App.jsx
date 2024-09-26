import { useState } from 'react'
import Map from './components/Map';
import Search from './components/Search';
import background from './assets/background.jpg';

import PointsOfInterest from './components/PointsOfInterest';
import POITypeSelector from './components/POITypeSelector';  // The dropdown for selecting POI type

function App() {
    const [center, setCenter] = useState({ lat: 42.743, lon: 25.62, zoom: 7.5 });
    const [markers, setMarkers] = useState([]);
    const [pois, setPOIs] = useState([]);
    const [selectedType, setSelectedType] = useState("");
    const [selectedMainCategory, setSelectedMainCategory] = useState(null);

    const handleTypeChange = (type) => {
        setSelectedType(type);

        if (!type) {
            setPOIs([]);
        };
    };

    const resetPOITypeSelector = () => {
        setSelectedType("");
        setSelectedMainCategory(null);
    };

    return (
        <div className='h-screen' style={{ backgroundImage: `url(${background})` }}>
            <POITypeSelector
                onTypeChange={handleTypeChange}
                markers={markers}
                selectedMainCategory={selectedMainCategory}
                setSelectedMainCategory={setSelectedMainCategory}
            />

            <div className='p-5'>
                <Search
                    setCenter={setCenter}
                    setMarkers={setMarkers}
                    resetPOITypeSelector={resetPOITypeSelector}
                    setPOIs={setPOIs}
                />
            </div>

            <div className='flex'>
                <div className="w-9/12 rounded-sm mx-5">
                    <Map
                        center={center}
                        markers={markers}
                        setCenter={setCenter}
                        setMarkers={setMarkers}
                        pois={pois}
                        setPOIs={setPOIs}
                    />
                </div>

                <div>
                    Text
                </div>
            </div>
            <PointsOfInterest center={center} setPOIs={setPOIs} selectedType={selectedType} />

        </div>

    );
};

export default App;
