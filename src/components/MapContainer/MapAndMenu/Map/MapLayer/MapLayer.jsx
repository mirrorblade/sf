import { useCallback, useEffect, useMemo } from 'react';
import { LayerGroup, Marker, useLeaflet, useMap } from 'react-leaflet';
// import { connect } from 'react-redux';
import { selectedMarker, visibility, selectedMarkerAgain } from '../../../../../store/actions/marker';
import newIcon from '../../../../../img/markerIcons/icons';
import { connect } from 'react-redux';
// import axios from 'axios';

const MapLayer = ({places, setVisibility, setSelectedMarker, setSelectedMarkerAgain}) => {
    const map = useMap();

    const grounds =  useMemo(() => {
        return places?.features.map((ground) => {
            const icon = newIcon(ground.properties['color']);
            const coordinates = [ground.geometry.coordinates[1], ground.geometry.coordinates[0]];
            const id = ground.properties.id

            return (
                <Marker
                    position={coordinates}
                    icon={icon}
                    key={id}
                    eventHandlers={{click: (e) => clickOnMarker(coordinates, icon, e.target)}}
                />
            )
        })
    }, [places])

    const actionsWithMarkers = () => {
        let selectedMarker;

        return (coordinates, icon, target) => {
            setVisibility(true);

            if (selectedMarker?.marker === target) {
                setSelectedMarkerAgain(true);
                
                return
            };
            setSelectedMarkerAgain(false)

            selectedMarker?.marker.setIcon(selectedMarker?.icon);
            target.setIcon(newIcon('blue'));
        
            map.flyTo(coordinates, 15);

            selectedMarker = {
                marker: target,
                coordinates: coordinates,
                icon: icon
            }

            setSelectedMarker(selectedMarker);
            setVisibility(true)
        };
    }
    
    const clickOnMarker = actionsWithMarkers()

    return (
        <LayerGroup>
            {grounds}
        </LayerGroup>
    )

}

const mapState = (state) => {
    return {
        places: state.places
    }
}

const mapDispatch = (dispatch) => {
    return {
        setVisibility: (payload) => 
            dispatch(visibility(payload)),
        setSelectedMarker: (payload) => 
            dispatch(selectedMarker(payload)),
        setSelectedMarkerAgain: (payload) =>
            dispatch(selectedMarkerAgain(payload))
    }
}

export default connect(mapState, mapDispatch)(MapLayer)