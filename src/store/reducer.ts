/**
 * reducer.ts
 * Store reducer.
 */
import { combineReducers } from 'redux';
import { timerReducer } from '../features/timer';
import { entitiesReducer } from '../features/entities';

export const reducer = combineReducers({
  timer: timerReducer,
  entities: entitiesReducer,
});
