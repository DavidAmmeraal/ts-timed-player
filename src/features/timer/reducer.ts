import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { TOGGLE, TICK, SET_RATE, SET_TIME } from './constants';

export type TimerAction = ActionType<typeof actions>;

export type TimerState = {
  readonly time: number;
  readonly rate: number;
  readonly running: boolean;
};

export const defaultState: TimerState = {
  time: 0,
  rate: 1,
  running: false,
};

export default (state: TimerState = defaultState, action: TimerAction) => {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        running: !state.running,
      };
    case TICK:
      return {
        ...state,
        time: state.time + state.rate * action.payload,
      };
    case SET_RATE:
      return {
        ...state,
        rate: action.payload,
      };
    case SET_TIME:
      return {
        ...state,
        time: action.payload,
      };
    default:
      return state;
  }
};
