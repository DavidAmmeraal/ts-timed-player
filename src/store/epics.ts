/**
 * epics.ts
 * Epics for store.
 */
import { combineEpics } from 'redux-observable';

import { timerEpic } from '../features/timer';

export const epics = combineEpics(timerEpic);
