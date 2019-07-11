import { SELECT_STOP } from '../actions/types';
import stopsReducer from './stopsReducer';

test('returns NULL stopSelected state when no action is passed', () => {
  const newState = stopsReducer();
  expect(newState.selectedStop).toBe(null);
})

test('returns state with correct ARRAY INDEX matching PAYLOAD INDEX when action.tye is `SELECT_STOP`', () => {
  const newState = stopsReducer(null, { type: SELECT_STOP, payload: {index: 15}});
  expect(newState.selectedStop.index).toBe(15);

})