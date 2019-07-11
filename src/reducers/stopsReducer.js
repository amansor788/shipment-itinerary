import {ADD_STOP, UPDATE_STOP, DELETE_STOP, COMPLETE_STOP, SELECT_STOP, UNSELECT_STOP} from '../actions/types';

const INIT_STATE = {
  stops: [],
  selectedStop: null
} 

export default (state=INIT_STATE, action={}) => {
  switch (action.type) {
    case ADD_STOP:
      return {...state, stops:[...state.stops, action.payload]};
    case UPDATE_STOP:
      return {...state, stops: state.stops.map((stop,index) => {
        return index === action.payload.index ? action.payload : stop})};
    case DELETE_STOP:
      return {...state, stops: state.stops.filter((stop, index) => {
        return index !== action.payload
      })};
    case SELECT_STOP:
      return {...state, selectedStop: action.payload};
    case UNSELECT_STOP:
      return {...state, selectedStop: null};
    case COMPLETE_STOP:
      const newArrStops = state.stops.map((stop,index) => {
        return index === action.payload ? {...stop, complete: !stop.complete} : stop})
      return {...state, stops: newArrStops};
    default:
      return state;
  }
}