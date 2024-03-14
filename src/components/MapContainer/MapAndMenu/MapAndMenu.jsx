import Map from './Map/Map';
import './MapAndMenu.css';
import Menu from './Menu/Menu';
import Shadow from './Shadow/Shadow';

import './MapAndMenu.css';

const MapAndMenu = () => {
    return (
        <div id='map_and_menu'>
            <Map />
            <Menu />
            <Shadow />
        </div>
    )
}

export default MapAndMenu