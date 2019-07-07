import {ADD_STOP} from '../actions/types';

const INIT_STATE = {
  1 : {
    id:1,
    name: 'Nombre',
    address: 'Direccion jsAJSA, SAjksaJ ,SA saJKSAjsKLA',
    complete: false, 
  },
  2 : {
    id:2,
    name: 'Nombre 2',
    address: 'Direccion jsAJSA, SAjksaJ ,SA saJKSAjsKLA',
    complete: false, 
  }
}

export default (state=INIT_STATE, action) => {
  switch (action.type) {
    case ADD_STOP:
      return state;
    default:
      return state;
  }
}