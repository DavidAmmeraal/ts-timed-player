import { StateType, ActionType } from 'typesafe-actions';
import { TimerAction } from 'features/timer';
import { EntitiesAction } from 'features/entities';
import * as actions from './actions';
import reducer from './reducer';

type StageAction = ActionType<typeof actions>;

declare module 'Types' {
  export type RootState = StateType<typeof reducer>;
  export type RootAction = TimerAction | EntitiesAction | StageAction;
}
