import {SELECT_STOP} from '../actions/types';

export default (state='', action) => {
  switch (action.type) {
    case SELECT_STOP:
      return action.payload;
    default:
      return state;
  }
}