import {ADD_STOP, UPDATE_STOP, DELETE_STOP, SELECT_STOP, UNSELECT_STOP, COMPLETE_STOP} from './types';
import shipwellApi from '../apis/shipwellApi';


export const addStop = (stop) => async (dispatch, getState) => {
  const response = await shipwellApi.post(
      'locations/addresses/validate/', 
      { formatted_address: stop.address })
  
  return dispatch ({
      type: ADD_STOP
      , payload: {
          ...stop,
          complete: false,
          geocoded_address: response.data.geocoded_address
      }
  });
}

export const updateStop = stop => async (dispatch, getState) => {
  const response = await shipwellApi.post(
      'locations/addresses/validate/', 
      { formatted_address: stop.address });

  return dispatch ({
      type: UPDATE_STOP
      , payload: {
          ...stop,
          geocoded_address: response.data.geocoded_address
      }
  });
}

export const deleteStop = index => {
  return {
    type: DELETE_STOP,
    payload: index
  }
}

export const editStop = stop => {
  return {
    type: SELECT_STOP,
    payload: stop
  }
}

export const unselectStop = () => {
  return {
    type: UNSELECT_STOP,
  }
}

export const completeStop = index => {
  return {
    type: COMPLETE_STOP,
    payload: index
  }
}
