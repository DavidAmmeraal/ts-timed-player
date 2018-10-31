import { combineEpics } from 'redux-observable';

import { timerEpic } from '../features/timer';
import { stageEpic } from '../features/stage';

export default combineEpics(timerEpic, stageEpic);
