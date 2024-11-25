const POIList = ({ pois, handlePOIClick, selectedPOI }) => {
    const isSelected = (poi) => {
        return selectedPOI && 
            Math.abs(selectedPOI.lat - poi.lat) < 0.0001 && 
            Math.abs(selectedPOI.lon - poi.lon) < 0.0001;
    };

    return (
        <div className="overflow-y-auto h-[70vh]">
            {pois.map((poi, idx) => (
                <div
                    key={idx}
                    onClick={() => handlePOIClick(poi)}
                    className={`p-2 border-b border-gray-300 cursor-pointer select-none 
                        ${isSelected(poi) ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
                >
                    <p>{poi.name}</p>
                </div>
            ))}
        </div>
    );
};

export default POIList;