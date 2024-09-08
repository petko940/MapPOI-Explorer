import { useState } from 'react'
import './App.css'
import Map from './components/Map';
import Search from './components/Search';

function App() {
    const [center, setCenter] = useState({ lat: 42.743, lon: 25.62, zoom: 8 });
    const [markers, setMarkers] = useState([]);

    return (
        <div className="App">
            <Search setCenter={setCenter} setMarkers={setMarkers} />
            <Map center={center} markers={markers} setCenter={setCenter} setMarkers={setMarkers} />
        </div>
    );
};

export default App;
