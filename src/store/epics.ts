import { combineEpics } from 'redux-observable';

import { timerEpic } from '../features/timer';

export default combineEpics(timerEpic);
