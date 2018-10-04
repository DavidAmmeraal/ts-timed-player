import { StateType } from 'typesafe-actions';
import { CountersAction } from '../features/counters';
import { TimerAction } from '../features/timer';
import reducer from './reducer';

declare module 'Types' {
  export type RootState = StateType<typeof reducer>;
  export type RootAction = CountersAction | TimerAction;
}
