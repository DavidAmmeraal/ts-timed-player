import { StateType } from 'typesafe-actions';
import { TimerAction } from 'features/timer';
import { EntitiesAction } from 'features/entities';
import reducer from './reducer';

declare module 'Types' {
  export type RootState = StateType<typeof reducer>;
  export type RootAction = TimerAction | EntitiesAction;
}
