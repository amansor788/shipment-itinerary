import {ADD_STOP, UPDATE_STOP, DELETE_STOP, SELECT_STOP, UNSELECT_STOP, COMPLETE_STOP} from './types';
import shipwellApi from '../apis/shipwellApi';


export const addStop = (stop, callbackOk, callbackError) => async (dispatch, getState) => {
  const response = await shipwellApi.post(
      'locations/addresses/validate/', 
      { formatted_address: stop.address })
 //      .then(() => callbackOk())
        ;
        // .catch(() => callbackError());

  return dispatch ({
      type: ADD_STOP
      , payload: {...stop,
        complete: false,
        geocoded_address: response.data.geocoded_address}});
}

export const updateStop = stop => async (dispatch, getState) => {
  const response = await shipwellApi.post(
      'locations/addresses/validate/', 
      { formatted_address: stop.address });

  return dispatch ({
      type: UPDATE_STOP
      , payload: {...stop, geocoded_address: response.data.geocoded_address}});
}

export const unselectStop = () => {
  return {
    type: UNSELECT_STOP,
  }
}

export const editStop = stop => {
  return {
    type: SELECT_STOP,
    payload: stop
  }
}

export const deleteStop = id => {
  return {
    type: DELETE_STOP,
    payload: id
  }
}

export const completeStop = id => {
  return {
    type: COMPLETE_STOP,
    payload: id
  }
}
