import { SELECT_STOP } from '../actions/types';
import selectReducer from './selectReducer';

test('returns state with ID NULL when no action is passed', () => {
  const newState = selectReducer();
  expect(newState.id).toBe(null);
})

test('returns state with ID matchin payload ID when action.tye is `SELECT_STOP`', () => {
  const newState = selectReducer({id: null}, { type: SELECT_STOP, payload: {id: 15}});
  expect(newState.id).toBe(15);

})