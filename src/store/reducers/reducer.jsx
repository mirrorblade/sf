import { PLACES, SELECTED_MARKER, VISIBILITY, SELECTED_MARKER_AGAIN } from '../actions/marker';
//import kidsGroundsInfo from '../../components/Data/markers.json';

const State = {
    places: null,
    selectedMarker: null,
    selectedMarkerAgain: false,
    isVisibleMarker: false
}

const markersReducer = (state = State, action) => {
    switch (action.type) {
        case SELECTED_MARKER:
            return {...state, selectedMarker: action.payload}

        case PLACES:
            return {...state, places: action.payload}

        case VISIBILITY:
            return {...state, isVisibleMarker: action.payload}

        case SELECTED_MARKER_AGAIN:
            return {...state, selectedMarkerAgain: action.payload}
        
        default:
            return state
    }
}

export default markersReducer