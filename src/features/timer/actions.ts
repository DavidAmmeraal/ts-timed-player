/**
 * actions.ts
 * Action creators for timer.
 */
import { action } from 'typesafe-actions';

import { TOGGLE, TICK, SET_RATE, SET_TIME } from './constants';

export const toggle = () => action(TOGGLE);
export const tick = (time: number) => action(TICK, time);
export const setRate = (rate: number) => action(SET_RATE, rate);
/**
 * Creates an SET_TIME time action.
 * @param time time in microseconds
 */
export const setTime = (time: number) => action(SET_TIME, time);
