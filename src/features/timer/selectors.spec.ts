/**
 * selectors.spec.ts
 */
import { reducer } from './reducer';
import * as selectors from './selectors';

const initialState = reducer(undefined, <any>{});

describe('selectors', () => {
  it('running selector should return running', () => {
    const running = !initialState.running;
    const state = {
      ...initialState,
      running,
    };

    expect(selectors.getRunning(state)).toBe(running);
  });

  it('rate selector should return rate', () => {
    const rate = initialState.rate + 12.44;
    const state = {
      ...initialState,
      rate,
    };

    expect(selectors.getRate(state)).toBe(rate);
  });

  describe('time selectors', () => {
    const time = 1234567;
    const state = { ...initialState, time };

    describe('getTimeMicro()', () => {
      it('should return time in microseconds', () => {
        expect(selectors.getTimeMicro(state)).toBe(time);
      });
    });

    describe('getTimeMilli()', () => {
      it('should return time in milliseconds', () => {
        expect(selectors.getTimeMilli(state)).toBe(time / 1000);
      });
    });

    describe('getTimeSeconds()', () => {
      it('should return time in milliseconds', () => {
        expect(selectors.getTimeSecs(state)).toBe(time / 1000 / 1000);
      });
    });
  });
});
