import {combineReducers} from 'redux';

import stopsReducer from './stopsReducer';

export default combineReducers({
  stops: stopsReducer,
});