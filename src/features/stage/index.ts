import { ActionType } from 'typesafe-actions';

import * as actions from './actions';
export type StageAction = ActionType<typeof actions>;