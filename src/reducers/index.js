import {combineReducers} from 'redux';

import stopsReducer from './stopsReducer';
import selectReducer from './selectReducer';

export default combineReducers({
  stops: stopsReducer,
  selectedStopId: selectReducer,
});