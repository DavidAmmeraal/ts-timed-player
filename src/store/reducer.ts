import { combineReducers } from 'redux';
import { timerReducer } from 'features/timer';
import { entitiesReducer } from 'features/entities';

const reducer = combineReducers({
  timer: timerReducer,
  entities: entitiesReducer,
});

export default reducer;
