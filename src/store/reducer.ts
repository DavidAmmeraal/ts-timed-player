import { combineReducers } from 'redux';
import { countersReducer } from '../features/counters';
import { timerReducer } from '../features/timer';

const reducer = combineReducers({
  counters: countersReducer,
  timer: timerReducer,
});

export default reducer;
