/**
 * selectors.ts
 * Selectors for timer epic.
 */
import { TimerState } from './reducer';

export const getRunning = (state: TimerState) => state.running;
export const getTimeMs = (state: TimerState) => state.time;
export const getTimeSecs = (state: TimerState) => state.time / 1000;
export const getRate = (state: TimerState) => state.rate;
