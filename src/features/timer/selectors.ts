/**
 * selectors.ts
 * Selectors for timer epic.
 */
import { TimerState } from './reducer';

export const getRunning = (state: TimerState) => state.running;
export const getTimeMicro = (state: TimerState) => state.time;
export const getTimeMilli = (state: TimerState) => getTimeMicro(state) / 1000;
export const getTimeSecs = (state: TimerState) => getTimeMilli(state) / 1000;
export const getRate = (state: TimerState) => state.rate;
