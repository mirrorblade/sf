import { connect } from 'react-redux';

import { selectedMarker, visibility } from '../../../../../../../store/actions/marker';

import './CloseButton.css';

const CloseButton = ({ setVisibility, setSelectedMarker }) => {
    return (
        <div className="close_button_container">
            <div className="close_button" onClick={() => {setVisibility(false); setSelectedMarker(null)}}>X</div>
        </div>
    )
}

const mapDispatch = (dispatch) => {
    return {
        setVisibility: (payload) =>
            dispatch(visibility(payload)),
        setSelectedMarker: (payload) =>
            dispatch(selectedMarker(payload))
    }
}

export default connect(null, mapDispatch)(CloseButton)