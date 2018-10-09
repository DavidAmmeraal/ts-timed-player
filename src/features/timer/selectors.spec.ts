import reducer from './reducer';
import * as selectors from './selectors';

const initialState = reducer(undefined, {} as any);

describe('selectors', () => {
    it('running selector should return running', () => {
        const running = !initialState.running;
        const state = {
            ...initialState,
            running
        }

        expect(selectors.getRunning(state)).toBe(running);
    });

    it('rate selector should return rate', () => {
        const rate = initialState.rate + 12.44;
        const state = {
            ...initialState,
            rate
        }

        expect(selectors.getRate(state)).toBe(rate);
    });

    it('time selector should return time', () => {
        const time = initialState.time + 3.12;
        const state = {
            ...initialState,
            time
        }

        expect(selectors.getTime(state)).toBe(time);
    });
})
