import {ADD_STOP} from '../actions/types';

export default (state={}, action) => {
  switch (action.type) {
    case ADD_STOP:
      return state;
    default:
      return state;
  }
}