import { TimerState } from './reducer';

export const getRunning = (state: TimerState) => state.running;
export const getTime = (state: TimerState) => state.time;
