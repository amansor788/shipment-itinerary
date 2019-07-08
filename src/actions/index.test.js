import { editStop, unselectStop } from './';
import { SELECT_STOP, UNSELECT_STOP } from './types';

describe('editStop', () => {
  test('returns an action with type `SELECT_STOP`', () => {
    const action = editStop(null);
    expect(action.type).toBe(SELECT_STOP);
  });
})

describe('unselectStop', () => {
  test('returns an action with type `UNSELECT_STOP`', () => {
    const action = unselectStop();
    expect(action.type).toBe(UNSELECT_STOP);
  });
})