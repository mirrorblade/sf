import { Icon, Point } from 'leaflet';

const newIcon = (color) => {
    const icon = new Icon({
        iconUrl: require(`./img/m_${color}.svg`),
        iconRetinaUrl: require(`./img/m_${color}.svg`),
        iconSize: new Point(15, 21),
        iconAnchor: null,
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        className: 'marker-icon'
    });

    return icon
}

export default newIcon