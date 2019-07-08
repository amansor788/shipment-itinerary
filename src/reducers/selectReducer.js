import {SELECT_STOP, UNSELECT_STOP} from '../actions/types';

const INITIAL_STATE = {
  id: null,
  name: '',
  address: '',
  geocoded_address: {},
  nameError: '',
  addressError: '',
}

export default (state=INITIAL_STATE, action={type:'UNDEF'}) => {
  switch (action.type) {
    case SELECT_STOP:
      return action.payload;
    case UNSELECT_STOP:
      return INITIAL_STATE;
    default:
      return state;
  }
}