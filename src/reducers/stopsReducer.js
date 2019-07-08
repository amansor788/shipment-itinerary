import {ADD_STOP, UPDATE_STOP} from '../actions/types';

const INIT_STATE = [
  // {
  //   name: 'Nombre',
  //   address: 'Direccion jsAJSA, SAjksaJ ,SA saJKSAjsKLA',
  //   geocoded_address: {},
  //   complete: false, 
  // },
  // {
  //   name: 'Nombre 2',
  //   address: 'Direccion jsAJSA, SAjksaJ ,SA saJKSAjsKLA',
  //   geocoded_address: {},
  //   complete: false, 
  // }
]

export default (state=INIT_STATE, action) => {
  switch (action.type) {
    case ADD_STOP:
      return [...state, action.payload];
    case UPDATE_STOP:
      return state.map((stop,index) => {
        return index === action.payload.id ? action.payload : stop});
    default:
      return state;
  }
}