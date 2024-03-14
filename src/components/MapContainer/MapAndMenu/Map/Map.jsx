import { useEffect } from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';
import { connect } from 'react-redux';
import { places } from '../../../../store/actions/marker';
import data from '../../../../data/data.json';
import './Map.css';
import axios from 'axios';
import MapLayer from './MapLayer/MapLayer';

const getGeoJson = () => {
    return data
}

const Map = ({ setPlaces }) => {
    const bounds = [
        [57.814671, 39.390803],
        [57.937349, 39.689861]
    ];
    const defaultPosition = [57.860866,39.514879];

    useEffect(() => {
        setPlaces(getGeoJson())
    }, [])

    return (
        <MapContainer 
            id='map'
            center={defaultPosition} 
            zoom={16} 
            setView={true} 
            maxBounds={bounds}
        >
            <TileLayer 
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                maxNativeZoom={18}
                maxZoom={18}
                minZoom={14}
            />

            <MapLayer />

        </MapContainer>
    )
}

const mapDispatch = (dispatch) => {
    return {
        setPlaces: (payload) => 
            dispatch(places(payload))
    }
}

export default connect(null, mapDispatch)(Map)