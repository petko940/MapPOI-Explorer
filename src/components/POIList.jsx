const POIList = ({ pois, handlePOIClick }) => {
    return (
        <div>
            {pois.map((poi, idx) => (
                <div key={idx} onClick={() => handlePOIClick(poi)}>
                    <p>{poi.name}</p>
                </div>
            ))}
        </div>
    );
};

export default POIList;