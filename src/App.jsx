import { useState } from 'react'
import Map from './components/Map';
import Search from './components/Search';
import background from './assets/background.jpg';

import PointsOfInterest from './components/PointsOfInterest';
import POITypeSelector from './components/POITypeSelector';
import POIList from './components/POIList';


function App() {
    const [center, setCenter] = useState({ lat: 42.743, lon: 25.62, zoom: 7.5 });
    const [markers, setMarkers] = useState([]);
    const [pois, setPOIs] = useState([]);
    const [selectedType, setSelectedType] = useState("");
    const [selectedMainCategory, setSelectedMainCategory] = useState(null);
    const [selectedPOI, setSelectedPOI] = useState(null);
    const [viewCenter, setViewCenter] = useState(center);

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

    const handlePOIClick = (poi) => {
        setViewCenter({ lat: poi.lat, lon: poi.lon, zoom: 18 });
        setSelectedPOI(poi);
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
                    setCenter={(newCenter) => {
                        setViewCenter(newCenter);
                        setCenter(newCenter);
                    }}
                    setMarkers={setMarkers}
                    resetPOITypeSelector={resetPOITypeSelector}
                    setPOIs={setPOIs}
                />
            </div>

            <div className='flex'>
                <div className="w-9/12 rounded-sm mx-5">
                    <Map
                        center={viewCenter}
                        markers={markers}
                        setCenter={(newCenter) => {
                            setViewCenter(newCenter);
                            setCenter(newCenter);
                        }}
                        setMarkers={setMarkers}
                        pois={pois}
                        setPOIs={setPOIs}
                        selectedPOI={selectedPOI}
                    />
                </div>

                <div>
                    <POIList
                        pois={pois}
                        handlePOIClick={handlePOIClick}
                    />
                </div>
            </div>

            <PointsOfInterest
                center={center}
                setPOIs={setPOIs}
                selectedType={selectedType}
            />

        </div>

    );
};

export default App;
