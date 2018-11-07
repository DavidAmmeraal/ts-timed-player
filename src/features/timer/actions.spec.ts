/**
 * actions.spec.ts
 * Unit tests for timer action creators.
 */
import * as actions from './actions';
import * as constants from './constants';

describe('timer actions creators', () => {
  it('should create an action to toggle timer', () => {
    const expectedAction = {
      type: constants.TOGGLE,
    };

    expect(actions.toggle()).toEqual(expectedAction);
  });

  it('should create an action to tick', () => {
    const payload = 10.55;
    const expectedAction = {
      type: constants.TICK,
      payload,
    };

    expect(actions.tick(payload)).toEqual(expectedAction);
  });

  it('should create an action to set rate', () => {
    const payload = 1.44;
    const expectedAction = {
      type: constants.SET_RATE,
      payload,
    };

    expect(actions.setRate(payload)).toEqual(expectedAction);
  });

  it('should create an action to set time', () => {
    const payload = 2.41;
    const expectedAction = {
      type: constants.SET_TIME,
      payload,
    };

    expect(actions.setTime(payload)).toEqual(expectedAction);
  });
});
