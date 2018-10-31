import { ActionType } from 'typesafe-actions';

import * as stageActions from './actions';
type StageAction = ActionType<typeof stageActions>;
import stageEpic from './epics';

export { stageActions, StageAction, stageEpic };
