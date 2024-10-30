import L from 'leaflet';
import selectedMarkerImage from '../icons/selected-marker.png';
import restaurantIconImage from '../icons/restaurant.png';
import coffeeIconImage from '../icons/coffee.png';
import hospitalIconImage from '../icons/hospital.png';
import parkingIconImage from '../icons/parking.png';
import pharmacyIconImage from '../icons/pharmacy.png';
import bankIconImage from '../icons/bank.png';
import policeStationIconImage from '../icons/police.png';
import gasStationIconImage from '../icons/gas-station.png';

export const defaultIcon = new L.Icon({
    iconUrl: selectedMarkerImage,
    iconSize: [35, 35],
    iconAnchor: [12.5, 25],
    popupAnchor: [0, -25],
});

export const restaurantIcon = new L.Icon({
    iconUrl: restaurantIconImage,
    iconSize: [30, 30],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

export const coffeeIcon = new L.Icon({
    iconUrl: coffeeIconImage,
    iconSize: [30, 30],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

export const hospitalIcon = new L.Icon({
    iconUrl: hospitalIconImage,
    iconSize: [30, 30],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

export const parkingIcon = new L.Icon({
    iconUrl: parkingIconImage,
    iconSize: [30, 30],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

export const pharmacyIcon = new L.Icon({
    iconUrl: pharmacyIconImage,
    iconSize: [30, 30],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

export const bankIcon = new L.Icon({
    iconUrl: bankIconImage,
    iconSize: [30, 30],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

export const policeStationIcon = new L.Icon({
    iconUrl: policeStationIconImage,
    iconSize: [30, 30],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

export const gasStationIcon = new L.Icon({
    iconUrl: gasStationIconImage,
    iconSize: [30, 30],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});