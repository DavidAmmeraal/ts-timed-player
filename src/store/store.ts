import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';
import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware();

function configureStore(initialState?: object) {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)));
  epicMiddleware.run(rootEpic);
  return store;
}

const store = configureStore();
export default store;
