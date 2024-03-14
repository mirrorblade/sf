import { connect } from 'react-redux';

import { selectedMarker, visibility } from '../../../../store/actions/marker';

import './Shadow.css';

const Shadow = ({ setVisibility, setSelectedMarker }) => {
    return (
        <div className='shadow' onClick={() => {setVisibility(false); setSelectedMarker(null)}} ></div>
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

export default connect(null, mapDispatch)(Shadow)