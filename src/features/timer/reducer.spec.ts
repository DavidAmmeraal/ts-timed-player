import reducer from './reducer';
import * as actions from './actions';
/**
 * FIXTURES
 */
const initialState = reducer(undefined, {} as any);

describe('timer reducer', () => {
    it('should have initial state', () => {
        expect(initialState).toMatchSnapshot();
    })

    it('should return same state on any action not being handled', () => {
        const state = reducer(initialState, {} as any);
        expect(state).toBe(initialState);
    })

    describe('handling TOGGLE action', () => {
        it('should toggle the running variable', () => {
            const action = actions.toggle();
            const state = reducer(initialState, action);
            expect(state.running).toBe(true);
            const toggledState = reducer(state, action);
            expect(toggledState.running).toBe(false);
        })
    })

    describe('handling TICK action', () => {
        it('should increase time by payload', () => {
            const timeA = 1.22;
            const tickA = actions.tick(timeA);

            const timeB = 0.99;
            const tickB = actions.tick(timeB);
            const state = reducer(initialState, tickA);
            const resultState = reducer(state, tickB);
            expect(resultState.time).toBe(timeA + timeB);
        })

        it('should multiply payload by rate', () => {
            const rate = 0.35;
            const time = 0.45

            const state = {
                ...initialState,
                time,
                rate
            };

            const tickTime = 1.22;
            const tick = actions.tick(tickTime);

            const resultState = reducer(state, tick);
            expect(resultState.time).toBe(time + (tickTime * rate));
        })
    });

    describe('handling SET_RATE action', () => {
        it('should set rate to payload', () => {
            const rate = initialState.rate + 3.55;
            const setRateAction = actions.setRate(rate);
            const resultState = reducer(initialState, setRateAction);
            expect(resultState.rate).toBe(rate);
        })
    })

    describe('handling SET_TIME action', () => {
        it('should set time to payload', () => {
            const time = initialState.time + 13.44;
            const setTimeAction = actions.setTime(time);
            const resultState = reducer(initialState, setTimeAction);
            expect(resultState.time).toBe(time);
        })
    });
});