import MapAndMenu from './MapAndMenu/MapAndMenu';
import MapBox from './MapBox/MapBox';
import './MapContainer.css';

const MapContainer = () => {
    return (
        <div className='map_container'>
            <MapBox />
            <MapAndMenu />
        </div>
    )
}

export default MapContainer