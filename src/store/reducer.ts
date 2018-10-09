import { combineReducers } from 'redux';
import { timerReducer } from '../features/timer';

const reducer = combineReducers({
  timer: timerReducer,
});

export default reducer;
