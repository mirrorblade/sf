import { connect } from 'react-redux';

import MenuContent from './MenuContent/MenuContent';
import Loading from './Loading/Loading';

import './Menu.css';

const Menu = ({ isVisibleMarker, selectedMarkerAgain }) => {
    const loadingFunction = () => {
        setTimeout(() => document.querySelector('#loading').classList.add('close'), 500);

        return <Loading />
    }

    return (
        <div className={`menu ${isVisibleMarker ? 'open' : 'close'}`} id='menu'>
            {!selectedMarkerAgain && isVisibleMarker && loadingFunction()}

            <MenuContent />
        </div>
    )
}

const menuStateToProps = (state) => {
    return {
        selectedMarkerAgain: state.selectedMarkerAgain,
        isVisibleMarker: state.isVisibleMarker
    }
}

export default connect(menuStateToProps, null)(Menu)