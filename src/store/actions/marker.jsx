export const SELECTED_MARKER = 'SELECTED_MARKER';
export const PLACES = 'PLACES';
export const VISIBILITY = 'VISIBILITY';
export const SELECTED_MARKER_AGAIN = 'SELECTED_MARKER_AGAIN';

export const selectedMarker = (marker) => ({
    type: SELECTED_MARKER,
    payload: marker
});

export const places = (places) => ({
    type: PLACES,
    payload: places
});

export const visibility = (bool) => ({
    type: VISIBILITY,
    payload: bool
});

export const selectedMarkerAgain = (bool) => ({
    type: SELECTED_MARKER_AGAIN,
    payload: bool
})

