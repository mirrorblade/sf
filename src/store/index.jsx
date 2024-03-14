import { createStore } from 'redux';
import markersReducer from './reducers/reducer';

export default createStore(markersReducer)